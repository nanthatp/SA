package controller

import (
	"net/http"

	"github.com/Nanthat/sa-65-example/entity"
	"github.com/gin-gonic/gin"
)

// POST /carts
func CreateCart(c *gin.Context) {
	var cart entity.Cart
	if err := c.ShouldBindJSON(&cart); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return

	}
	if err := entity.DB().Create(&cart).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": cart})
}

// GET /cart/:id
func GetCart(c *gin.Context) {
	var cart entity.Cart
	id := c.Param("id")
	if tx := entity.DB().Where("id = ?", id).First(&cart); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cart not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": cart})
}

// GET /carts
func ListCart(c *gin.Context) {
	var carts []entity.Cart
	if err := entity.DB().Preload("Member").Preload("Employee").Raw("SELECT * FROM carts").Find(&carts).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": carts})
}

// DELETE carts/:id
func DeleteCart(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM carts WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cart not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /carts
func UpdateCart(c *gin.Context) {
	var cart entity.Cart
	if err := c.ShouldBindJSON(&cart); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", cart.ID).First(&cart); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cart not found"})
		return
	}

	if err := entity.DB().Save(&cart).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": cart})
}
