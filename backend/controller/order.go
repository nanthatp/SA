package controller

import (
	"net/http"

	"github.com/Nanthat/sa-65-example/entity"
	"github.com/gin-gonic/gin"
)

// POST /orders
func CreateOrder(c *gin.Context) {
	var order entity.Cart
	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return

	}
	if err := entity.DB().Create(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": order})

	// var cart entity.Cart
	// var employee entity.Employee
	// var member entity.Member
	// var product entity.Product

	// // ผลลัพธ์ที่ได้จากขั้นตอนที่ 8 จะถูก bind เข้าตัวแปร product
	// if err := c.ShouldBindJSON(&product); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }

	// // 9: ค้นหา typeproduct ด้วย id
	// if tx := entity.DB().Where("id = ?", product.TypeproductID).First(&typeproduct); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "typeproduct not found"})
	// 	return
	// }

	// // 10: ค้นหา manufacturer ด้วย id
	// if tx := entity.DB().Where("id = ?", product.ManufacturerID).First(&manufacturer); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "manufacturer not found"})
	// 	return
	// }

	// // 11: ค้นหา employee ด้วย id
	// if tx := entity.DB().Where("id = ?", product.EmployeeID).First(&employee); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "employee not found"})
	// 	return
	// }
	// // 12: สร้าง Product
	// wv := entity.Product{
	// 	Product_name:  product.Product_name,  // ตั้งค่าฟิลด์ Product_name
	// 	Product_price: product.Product_price, //ตั้งค่าฟิลด์ Product_price
	// 	Typeproduct:   typeproduct,           // โยงความสัมพันธ์กับ Entity Typeproduct
	// 	Manufacturer:  manufacturer,          // โยงความสัมพันธ์กับ Entity Typeproduct
	// 	Employee:      employee,              // โยงความสัมพันธ์กับ Entity Employee

	// }

	// // 13: บันทึก
	// if err := entity.DB().Create(&wv).Error; err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }
	// c.JSON(http.StatusCreated, gin.H{"data": wv})
}

// GET /order/:id
func GetOrder(c *gin.Context) {
	var order entity.Order
	id := c.Param("id")
	if tx := entity.DB().Where("id = ?", id).First(&order); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "order not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": order})
}

// GET /Orders
func ListOrder(c *gin.Context) {
	var orders []entity.Order
	if err := entity.DB().Preload("Product").Preload("Cart").Raw("SELECT * FROM orders").Find(&orders).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": orders})
}

// DELETE orders/:id
func DeleteOrder(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM orders WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cart not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /orders
func UpdateOrder(c *gin.Context) {
	var order entity.Order
	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", order.ID).First(&order); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "order not found"})
		return
	}

	if err := entity.DB().Save(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": order})
}
