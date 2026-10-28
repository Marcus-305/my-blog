(function () {
  function hideLoader() {
    const loader = document.getElementById("page-loader");

    if (loader) {
      loader.classList.add("loader-hidden");
    }
  }

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, {
      once: true
    });
  }

  // 防止加载过程异常时遮罩一直停留
  window.setTimeout(hideLoader, 5000);
})();
