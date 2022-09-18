function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('demo').style.opacity="0.8";
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('demo').style.opacity="1";
}