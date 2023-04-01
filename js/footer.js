const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Novel</li>
            <li><a href="#" class="footer-link">Detective</a></li>
            <li><a href="#" class="footer-link">Self help</a></li>
            <li><a href="#" class="footer-link">Psychology</a></li>
            <li><a href="#" class="footer-link">Science</a></li>
            <li><a href="#" class="footer-link">Infomation technique</a></li>
            <li><a href="#" class="footer-link">Nutrition</a></li>
            <li><a href="#" class="footer-link">Biology</a></li>
            <li><a href="#" class="footer-link">Sport</a></li>
            <li><a href="#" class="footer-link">Natural</a></li>
            <li><a href="#" class="footer-link">Manga</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">light novel</li>
            <li><a href="#" class="footer-link">Gió đầu mùa lạnh</a></li>
            <li><a href="#" class="footer-link">Mũi hoài vọng</a></li>
            <li><a href="#" class="footer-link">Miền đất hứa</a></li>
            <li><a href="#" class="footer-link">Phía bên kia nửa đ</a></li>
            <li><a href="#" class="footer-link">Đứa con của thời tiết</a></li>
            <li><a href="#" class="footer-link">Thanh gươm diệt quỷ</a></li>
            <li><a href="#" class="footer-link">86-EIGHTY-SIX</a></li>
            <li><a href="#" class="footer-link">BAKEMONOGATARI</a></li>
            <li><a href="#" class="footer-link">Sword art online</a></li>
            <li><a href="#" class="footer-link">Tanya chiến ký</a></li>
        </ul>
    </div>
   
</div>
<p class="footer-title">About company</p>
<p class="info">BookShop Being a famous book brand that can provide other bookstores across the country to conduct part or the whole process of buying and selling goods and services on the e-commerce floor.</p>
<p class="info">support emails - hoangslevan@gmail.com, truongvinhhoa130103@gmail.com</p>
<p class="info">telephone - 0399354603, 0941933609</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & service</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="https://www.instagram.com/"  class="social-link">istagram</a>
        <a href="https://www.facebook.com/" class="social-link">facebook</a>
        <a href="https://twitter.com/" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">BookShop to bring more Knowledges</p>
    `;
}
createFooter();