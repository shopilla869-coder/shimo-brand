// 1. تحديد العناصر من صفحة الـ HTML
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const quantityInput = document.getElementById('quantity-input');
const quickCheckoutForm = document.getElementById('quick-checkout-form');

// 2. كود تشغيل زرار زيادة الكمية
if (increaseBtn && quantityInput) {
    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value) || 1;
        quantityInput.value = currentValue + 1;
    });
}

// 3. كود تشغيل زرار تقليل الكمية بشرط ألا تقل عن 1
if (decreaseBtn && quantityInput) {
    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
}

// 4. كود سحب البيانات والربط التلقائي بالواتساب
if (quickCheckoutForm) {
    quickCheckoutForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const fullName = document.getElementById('full-name').value;
        const phone = document.getElementById('phone').value;
        const country = document.getElementById('country').value;
        const quantity = quantityInput ? quantityInput.value : 1;
        const productName = "قطعة ملابس من Shimoo Brand"; 

        const whatsappNumber = "201017051293"; 

        // كتابة نص الرسالة بأسلوب يمنع أي تداخل أو أخطاء برمجية
        const messageText = "مرحباً Shimoo Brand ✨\nلقد قمت بطلب منتج من الموقع الإلكتروني:\n\n*المنتج:* " + productName + "\n*الكمية:* " + quantity + "\n\n*--- بيانات الشحن ---*\n*الاسم بالكامل:* " + fullName + "\n*رقم الهاتف:* " + phone + "\n*الدولة:* " + country;

        const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(messageText);

        window.open(whatsappUrl, '_blank');
    });
}