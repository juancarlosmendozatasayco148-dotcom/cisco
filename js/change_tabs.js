function toExchangeImage(imgElement) {
  var mainImg = document.getElementById('img_main');
  if (mainImg && imgElement) {
    var tempSrc = mainImg.src;
    mainImg.src = imgElement.src;
    imgElement.src = tempSrc;
  }
}

function viewImage(src) {
  var modal = document.getElementById('image-modal');
  var modalImg = document.getElementById('modal-image');
  if (modal && modalImg && src) {
    modalImg.src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    var btn = modal.querySelector('button');
    if (btn) btn.focus();
  }
}

function closeModal() {
  var modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var productTab = document.getElementById('product-tab');
  var imagesTab = document.getElementById('images-tab');
  var infoSection = document.getElementById('information-section');
  var imagesSection = document.getElementById('images-section');

  if (productTab && imagesTab) {
    function activateProductTab() {
      if (infoSection) infoSection.classList.remove('hidden');
      if (imagesSection) imagesSection.classList.add('hidden');
      productTab.className = productTab.className.replace(/bg-gray-100\s*text-\w+/, 'bg-gray-100');
      imagesTab.className = imagesTab.className.replace(/bg-amp-blue\s*text-white/, 'bg-gray-100');
      productTab.className = productTab.className.replace(/(rounded-l-xl\s*)/, '$1bg-amp-blue text-white ');
      imagesTab.className = imagesTab.className.replace(/(rounded-r-xl\s*)/, '$1bg-gray-100 text-amp-navy ');
    }

    function activateImagesTab() {
      if (infoSection) infoSection.classList.add('hidden');
      if (imagesSection) imagesSection.classList.remove('hidden');
      productTab.className = productTab.className.replace(/bg-amp-blue\s*text-white/, 'bg-gray-100');
      imagesTab.className = imagesTab.className.replace(/bg-gray-100\s*text-\w+/, 'bg-gray-100');
      imagesTab.className = imagesTab.className.replace(/(rounded-r-xl\s*)/, '$1bg-amp-blue text-white ');
      productTab.className = productTab.className.replace(/(rounded-l-xl\s*)/, '$1bg-gray-100 text-amp-navy ');
    }

    productTab.addEventListener('click', activateProductTab);
    imagesTab.addEventListener('click', activateImagesTab);
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
  var modal = document.getElementById('image-modal');
  if (modal && !modal.classList.contains('hidden') && e.key === 'Tab') {
    var focusable = modal.querySelectorAll('button, img');
    if (focusable.length > 0) {
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
});

document.addEventListener('click', function(e) {
  var modal = document.getElementById('image-modal');
  if (modal && e.target === modal) closeModal();
});