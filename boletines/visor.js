/* =====================================================================
   Visor de Boletines ACG — lógica (PDF.js)
   FUENTE CANÓNICA. Editar aquí, NO en el embed de Webflow.
   Se sirve por jsDelivr: https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/visor.js
   Tras actualizar, purgar: https://purge.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/visor.js
   ===================================================================== */
(function(){
  "use strict";

  var ROOT_ID = "acg-visor";
  var BASE_URL = "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/boletines/";
  var DEFAULT_ZOOM = 0.80;

  /*
    Añade futuros boletines con una fecha ISO para ordenarlos automáticamente.
    Ejemplo:
    { id:"39", title:"Boletín 39", date:"2026-08-01", file:"Boletin39.pdf", detail:"Agosto de 2026" }
  */
  var BOLETINES = [
    { id:"38", title:"Boletín 38", date:"2026-02-01", file:"Boletin38.pdf", detail:"Febrero de 2026" },
    {
      id:"37",
      title:"Boletín 37",
      date:"2025-12-01",
      detail:"Diciembre de 2025",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@da039fb7b774b451f9a552690a3f5135d2af9fee/boletines/Boletin37.pdf"
    },
    {
      id:"36",
      title:"Boletín 36",
      date:"2025-10-01",
      detail:"Octubre de 2025",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@30866a65bb5756d2c553a3cc10573d85b77e4d2f/boletines/Boletin36.pdf"
    },
    {
      id:"35",
      title:"Boletín 35",
      date:"2025-08-01",
      detail:"Agosto de 2025",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@9d972d7a8ea89eaece8a2322b6279a2fd6e0d851/boletines/Boletin35.pdf"
    },
    {
      id:"34",
      title:"Boletín 34",
      date:"2025-06-01",
      detail:"Junio de 2025",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@9d972d7a8ea89eaece8a2322b6279a2fd6e0d851/boletines/Boletin34.pdf"
    },
    {
      id:"33",
      title:"Boletín 33",
      date:"2025-03-01",
      detail:"Marzo de 2025",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@9d972d7a8ea89eaece8a2322b6279a2fd6e0d851/boletines/Boletin33.pdf"
    },
    {
      id:"32",
      title:"Boletín 32",
      date:"2025-01-01",
      detail:"Enero de 2025",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@9d972d7a8ea89eaece8a2322b6279a2fd6e0d851/boletines/Boletin32.pdf"
    },
    {
      id:"31",
      title:"Boletín 31",
      date:"2024-11-01",
      detail:"Noviembre de 2024",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@f8327152e7a64f1404733f742b0f8d6a0db393f9/boletines/Boletin31.pdf"
    },
    {
      id:"30",
      title:"Boletín 30",
      date:"2024-09-01",
      detail:"Septiembre de 2024",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@f8327152e7a64f1404733f742b0f8d6a0db393f9/boletines/Boletin30.pdf"
    },
    {
      id:"29",
      title:"Boletín 29",
      date:"2024-08-01",
      detail:"Agosto de 2024",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@f8327152e7a64f1404733f742b0f8d6a0db393f9/boletines/Boletin29.pdf"
    },
    {
      id:"28",
      title:"Boletín 28",
      date:"2024-06-01",
      detail:"Junio de 2024",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@f8327152e7a64f1404733f742b0f8d6a0db393f9/boletines/Boletin28.pdf"
    },
    {
      id:"27",
      title:"Boletín 27",
      date:"2024-05-01",
      detail:"Mayo de 2024",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@f8327152e7a64f1404733f742b0f8d6a0db393f9/boletines/Boletin27.pdf"
    },
    {
      id:"26",
      title:"Boletín 26",
      date:"2024-04-01",
      detail:"Abril de 2024",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@79463975b3ba48b72e3d1c104d718d4b62403382/boletines/Boletin26.pdf"
    },
    {
      id:"25",
      title:"Boletín 25",
      date:"2024-02-01",
      detail:"Febrero de 2024",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@79463975b3ba48b72e3d1c104d718d4b62403382/boletines/Boletin25.pdf"
    },
    {
      id:"24",
      title:"Boletín 24",
      date:"2023-11-01",
      detail:"Noviembre de 2023",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@79463975b3ba48b72e3d1c104d718d4b62403382/boletines/Boletin24.pdf"
    },
    {
      id:"23",
      title:"Boletín 23",
      date:"2023-09-01",
      detail:"Septiembre de 2023",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@79463975b3ba48b72e3d1c104d718d4b62403382/boletines/Boletin23.pdf"
    },
    {
      id:"22",
      title:"Boletín 22",
      date:"2023-08-01",
      detail:"Agosto de 2023",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@79463975b3ba48b72e3d1c104d718d4b62403382/boletines/Boletin22.pdf"
    },
    {
      id:"21",
      title:"Boletín 21",
      date:"2023-06-01",
      detail:"Junio de 2023",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@79463975b3ba48b72e3d1c104d718d4b62403382/boletines/Boletin21.pdf"
    },
    {
      id:"20",
      title:"Boletín 20",
      date:"2023-05-01",
      detail:"Mayo de 2023",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@79463975b3ba48b72e3d1c104d718d4b62403382/boletines/Boletin20.pdf"
    },
    {
      id:"19",
      title:"Boletín 19",
      date:"2023-03-01",
      detail:"Marzo de 2023",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin19.pdf"
    },
    {
      id:"18",
      title:"Boletín 18",
      date:"2023-02-01",
      detail:"Febrero de 2023",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin18.pdf"
    },
    {
      id:"17",
      title:"Boletín 17",
      date:"2023-01-01",
      detail:"Enero de 2023",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin17.pdf"
    },
    {
      id:"16",
      title:"Boletín 16",
      date:"2022-11-01",
      detail:"Noviembre de 2022",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin16.pdf"
    },
    {
      id:"15",
      title:"Boletín 15",
      date:"2022-09-01",
      detail:"Septiembre de 2022",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin15.pdf"
    },
    {
      id:"8",
      title:"Boletín 8",
      date:"2019-03-11",
      detail:"Marzo de 2019",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin8.pdf"
    },
    {
      id:"7",
      title:"Boletín 7",
      date:"2019-02-07",
      detail:"Febrero de 2019",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin7.pdf"
    },
    {
      id:"6",
      title:"Boletín 6",
      date:"2018-12-01",
      detail:"Diciembre de 2018",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin6.pdf"
    },
    {
      id:"5",
      title:"Boletín 5",
      date:"2018-11-01",
      detail:"Noviembre de 2018",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin5.pdf"
    },
    {
      id:"4",
      title:"Boletín 4",
      date:"2018-10-01",
      detail:"Octubre de 2018",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin4.pdf"
    },
    {
      id:"3",
      title:"Boletín 3",
      date:"2018-09-01",
      detail:"Septiembre de 2018",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin3.pdf"
    },
    {
      id:"2",
      title:"Boletín 2",
      date:"2018-08-02",
      detail:"Agosto de 2018",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin2.pdf"
    },
    {
      id:"1",
      title:"Boletín 1",
      date:"2018-07-01",
      detail:"Julio de 2018",
      url:"https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@cad886f94ac31bd11e242dbf0e9b288b558b71a7/boletines/Boletin1.pdf"
    }
  ];

  BOLETINES.sort(function(a, b){
    var dateDifference = (Date.parse(b.date || "") || 0) -
      (Date.parse(a.date || "") || 0);

    if(dateDifference) return dateDifference;
    return (Number(b.id) || 0) - (Number(a.id) || 0);
  });

  function start(){
    var root = document.getElementById(ROOT_ID);
    if(!root || root.getAttribute("data-acg-ready") === "true") return;

    root.setAttribute("data-acg-ready", "true");
    init(root);
  }

  function init(root){
    var drawer = root.querySelector(".acg-drawer");
    var backdrop = root.querySelector(".acg-backdrop");
    var menuButton = root.querySelector(".acg-menu-btn");
    var closeButton = root.querySelector(".acg-close");
    var list = root.querySelector(".acg-list");
    var stage = root.querySelector(".acg-stage");
    var pagesEl = root.querySelector(".acg-pages");
    var titleEl = root.querySelector(".acg-title");
    var pageInput = root.querySelector(".acg-page-input");
    var pageTotal = root.querySelector(".acg-page-total");
    var zoomLabel = root.querySelector(".acg-zoom");
    var loading = root.querySelector(".acg-loading");
    var errorEl = root.querySelector(".acg-error");
    var prevButton = root.querySelector(".acg-prev");
    var nextButton = root.querySelector(".acg-next");
    var zoomOutButton = root.querySelector(".acg-zoom-out");
    var zoomInButton = root.querySelector(".acg-zoom-in");
    var fitButton = root.querySelector(".acg-fit");
    var fullButton = root.querySelector(".acg-full");

    var pdfjsLib = null;
    var pdfDoc = null;
    var loadingTask = null;
    var currentPage = 1;
    var zoom = DEFAULT_ZOOM;
    var renderToken = 0;
    var loadToken = 0;
    var pageEls = [];
    var pageObserver = null;
    var resizeTimer = null;
    var lastStageWidth = 0;
    var pageRatios = {};
    var reduceMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var siteNavigation = document.querySelector(".left-navigation");

    function bulletinUrl(item){
      return item.url || (BASE_URL + item.file);
    }

    function syncSiteNavigationLayer(){
      if(!siteNavigation){
        root.classList.remove("acg-site-navigation-open");
        return;
      }

      var navigationWidth = siteNavigation.getBoundingClientRect().width;
      root.classList.toggle("acg-site-navigation-open", navigationWidth > 2);
    }

    function monitorSiteNavigationLayer(){
      if(!siteNavigation) return;

      syncSiteNavigationLayer();

      if(typeof window.MutationObserver === "function"){
        var observer = new MutationObserver(function(){
          window.requestAnimationFrame(syncSiteNavigationLayer);
        });

        observer.observe(siteNavigation, {
          attributes:true,
          attributeFilter:["class", "style"]
        });
      }

      window.setInterval(syncSiteNavigationLayer, 200);
    }

    function openMenu(){
      root.classList.add("acg-menu-open");
      menuButton.setAttribute("aria-expanded", "true");
      drawer.setAttribute("aria-hidden", "false");
      backdrop.hidden = false;
      window.setTimeout(function(){
        closeButton.focus();
      }, 0);
    }

    function closeMenu(returnFocus){
      var focusInside = drawer.contains(document.activeElement);
      root.classList.remove("acg-menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      drawer.setAttribute("aria-hidden", "true");
      backdrop.hidden = true;

      if(returnFocus){
        menuButton.focus();
      }else if(focusInside){
        root.focus({ preventScroll:true });
      }
    }

    function setLoading(message){
      loading.textContent = message || "Cargando boletín…";
      loading.hidden = false;
      errorEl.hidden = true;
    }

    function showError(message){
      loading.hidden = true;
      errorEl.hidden = false;

      if(message){
        var small = errorEl.querySelector("small");
        if(small) small.textContent = message;
      }
    }

    function updateControls(){
      var total = pdfDoc ? pdfDoc.numPages : 0;

      pageInput.value = currentPage;
      pageInput.max = total || 1;
      pageTotal.textContent = "/ " + (total || "—");
      zoomLabel.textContent = Math.round(zoom * 100) + "%";

      prevButton.disabled = !pdfDoc || currentPage <= 1;
      nextButton.disabled = !pdfDoc || currentPage >= total;
      zoomOutButton.disabled = !pdfDoc || zoom <= 0.25;
      zoomInButton.disabled = !pdfDoc || zoom >= 2.5;
      fitButton.disabled = !pdfDoc;
    }

    function setActiveBulletin(id){
      var buttons = list.querySelectorAll(".acg-list-item");
      Array.prototype.forEach.call(buttons, function(button){
        button.classList.toggle("is-active", button.getAttribute("data-id") === id);
      });
    }

    function buildMenu(){
      var currentYear = "";

      BOLETINES.forEach(function(item){
        var year = String(item.date || "").slice(0, 4);

        if(year && year !== currentYear){
          var separator = document.createElement("div");
          separator.className = "acg-year-separator";
          separator.textContent = year;
          separator.setAttribute("role", "heading");
          separator.setAttribute("aria-level", "3");
          list.appendChild(separator);
          currentYear = year;
        }

        var button = document.createElement("button");
        button.type = "button";
        button.className = "acg-list-item";
        button.setAttribute("data-id", item.id);

        var strong = document.createElement("strong");
        strong.textContent = item.title;

        var small = document.createElement("small");
        small.textContent = item.detail || "";

        button.appendChild(strong);
        button.appendChild(small);

        button.addEventListener("click", function(){
          loadBulletin(item.id);
          closeMenu(false);
        });

        list.appendChild(button);
      });
    }

    function observePages(){
      if(pageObserver){
        pageObserver.disconnect();
      }

      pageRatios = {};

      if(!("IntersectionObserver" in window)) return;

      pageObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          var pageNumber = Number(entry.target.getAttribute("data-page"));
          if(pageNumber){
            pageRatios[pageNumber] = entry.isIntersecting ? entry.intersectionRatio : 0;
          }
        });

        var bestPage = 0;
        var bestRatio = -1;

        Object.keys(pageRatios).forEach(function(key){
          if(pageRatios[key] > bestRatio){
            bestRatio = pageRatios[key];
            bestPage = Number(key);
          }
        });

        if(bestPage && bestRatio > 0 && bestPage !== currentPage){
          currentPage = bestPage;
          updateControls();
        }
      },{
        root:stage,
        threshold:[0,0.1,0.25,0.5,0.75,1]
      });

      pageEls.forEach(function(pageEl){
        pageObserver.observe(pageEl);
      });
    }

    function scrollToPage(pageNumber, smooth, centerHorizontal){
      var pageEl = pageEls[pageNumber - 1];
      if(!pageEl) return;

      var options = {
        top:Math.max(0, pageEl.offsetTop - 12),
        behavior:smooth && !reduceMotion ? "smooth" : "auto"
      };

      if(centerHorizontal){
        options.left = Math.max(0, (pagesEl.scrollWidth - stage.clientWidth) / 2);
      }

      stage.scrollTo(options);
    }

    function normalizeExternalUrl(value){
      if(typeof value !== "string") return null;

      var url = value.trim().replace(/[),.;:]+$/, "");
      if(!url) return null;

      url = url.replace(/^www\.(https?:\/\/)/i, "$1");

      if(/^[\w.+-]+@[\w.-]+\.[a-z]{2,}$/i.test(url)){
        url = "mailto:" + url;
      }else if(/^www\./i.test(url)){
        url = "https://" + url;
      }

      if(!/^(https?:|mailto:)/i.test(url)) return null;

      try{
        return new URL(url).href;
      }catch(ignore){
        return null;
      }
    }

    function openDetectedLink(url){
      var anchor = document.createElement("a");
      anchor.href = url;
      anchor.rel = "noopener noreferrer";
      anchor.style.display = "none";

      if(!/^mailto:/i.test(url)){
        anchor.target = "_blank";
      }

      root.appendChild(anchor);
      anchor.click();
      anchor.remove();
    }

    function enhanceDetectedTextLinks(textLayer){
      var spans = textLayer.querySelectorAll("span");
      var pattern = /(?:https?:\/\/|www\.)[^\s<>"']+|[\w.+-]+@[\w.-]+\.[a-z]{2,}/i;

      Array.prototype.forEach.call(spans, function(span){
        var match = (span.textContent || "").match(pattern);
        var url = match ? normalizeExternalUrl(match[0]) : null;
        if(!url) return;

        span.classList.add("acg-detected-link");
        span.setAttribute("role", "link");
        span.setAttribute("tabindex", "0");
        span.setAttribute("aria-label", "Abrir " + url);
        span.setAttribute("title", url);

        span.addEventListener("click", function(event){
          var selection = window.getSelection ? window.getSelection() : null;
          if(selection && !selection.isCollapsed) return;

          event.preventDefault();
          event.stopPropagation();
          openDetectedLink(url);
        });

        span.addEventListener("keydown", function(event){
          if(event.key !== "Enter" && event.key !== " ") return;

          event.preventDefault();
          event.stopPropagation();
          openDetectedLink(url);
        });
      });
    }

    function goToDestination(documentRef, destination){
      var destinationPromise = typeof destination === "string" ?
        documentRef.getDestination(destination) : Promise.resolve(destination);

      destinationPromise.then(function(explicitDestination){
        if(!Array.isArray(explicitDestination) || !explicitDestination.length) return;

        var pageReference = explicitDestination[0];
        if(Number.isInteger(pageReference)){
          goToPage(pageReference + 1);
          return;
        }

        return documentRef.getPageIndex(pageReference).then(function(pageIndex){
          goToPage(pageIndex + 1);
        });
      }).catch(function(error){
        console.warn("[Visor ACG] No se pudo abrir el destino interno:", error);
      });
    }

    function runNamedAction(action){
      if(action === "NextPage") goToPage(currentPage + 1);
      else if(action === "PrevPage") goToPage(currentPage - 1);
      else if(action === "FirstPage") goToPage(1);
      else if(action === "LastPage" && pdfDoc) goToPage(pdfDoc.numPages);
    }

    async function renderPageLinks(page, viewport, surface, token, documentRef){
      var annotations = await page.getAnnotations({ intent:"display" });
      if(token !== renderToken) return 0;

      var layer = document.createElement("div");
      layer.className = "acg-link-layer";
      var linkCount = 0;

      annotations.forEach(function(annotation){
        if(annotation.subtype !== "Link" || !annotation.rect) return;

        var url = normalizeExternalUrl(annotation.url || annotation.unsafeUrl || "");
        var hasInternalDestination = annotation.dest !== undefined && annotation.dest !== null;
        var hasNamedAction = typeof annotation.action === "string";
        if(!url && !hasInternalDestination && !hasNamedAction) return;

        var rectangle = viewport.convertToViewportRectangle(annotation.rect);
        var left = Math.min(rectangle[0], rectangle[2]);
        var top = Math.min(rectangle[1], rectangle[3]);
        var width = Math.abs(rectangle[2] - rectangle[0]);
        var height = Math.abs(rectangle[3] - rectangle[1]);
        if(width <= 0 || height <= 0) return;

        var link = document.createElement("a");
        link.style.left = left + "px";
        link.style.top = top + "px";
        link.style.width = width + "px";
        link.style.height = height + "px";

        if(url){
          link.href = url;
          link.setAttribute("aria-label", "Abrir " + url);
          link.title = url;
          link.rel = "noopener noreferrer";
          if(!/^mailto:/i.test(url)) link.target = "_blank";
        }else{
          link.href = "#";
          link.setAttribute("aria-label", "Ir al destino dentro del PDF");

          link.addEventListener("click", function(event){
            event.preventDefault();
            event.stopPropagation();

            if(hasInternalDestination){
              goToDestination(documentRef, annotation.dest);
            }else{
              runNamedAction(annotation.action);
            }
          });
        }

        layer.appendChild(link);
        linkCount += 1;
      });

      if(linkCount){
        surface.appendChild(layer);
      }

      return linkCount;
    }

    async function renderAll(preservePage){
      if(!pdfDoc || !pdfjsLib) return;

      var token = ++renderToken;
      var documentRef = pdfDoc;
      var pageToPreserve = preservePage || currentPage || 1;
      var replacingVisiblePages = pageEls.length > 0;
      var oldAnchor = pageEls[pageToPreserve - 1];
      var viewportCenterY = stage.scrollTop + (stage.clientHeight / 2);
      var anchorRatio = oldAnchor && oldAnchor.offsetHeight ?
        (viewportCenterY - oldAnchor.offsetTop) / oldAnchor.offsetHeight : 0.5;
      var oldHorizontalMax = Math.max(0, pagesEl.scrollWidth - stage.clientWidth);
      var horizontalRatio = oldHorizontalMax ? stage.scrollLeft / oldHorizontalMax : 0.5;
      var nextPagesEl = replacingVisiblePages ? pagesEl.cloneNode(false) : pagesEl;
      var nextPageEls = [];

      if(pageObserver){
        pageObserver.disconnect();
      }

      if(!replacingVisiblePages){
        pagesEl.innerHTML = "";
        pageEls = [];
        setLoading("Preparando páginas…");
      }

      var horizontalPadding = window.innerWidth <= 720 ? 20 : 36;
      var availableWidth = Math.max(stage.clientWidth - horizontalPadding, 240);
      var fitWidth = Math.min(availableWidth, 960);
      var cssWidth = Math.max(120, fitWidth * zoom);
      var dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      lastStageWidth = stage.clientWidth;

      for(var pageNumber = 1; pageNumber <= documentRef.numPages; pageNumber++){
        if(token !== renderToken) return;

        var page = await documentRef.getPage(pageNumber);
        if(token !== renderToken) return;

        var natural = page.getViewport({ scale:1 });
        var cssScale = cssWidth / natural.width;
        var cssViewport = page.getViewport({ scale:cssScale });
        var safeDpr = Math.min(dpr, 4096 / cssViewport.width, 4096 / cssViewport.height);
        var renderViewport = page.getViewport({ scale:cssScale * safeDpr });

        var wrap = document.createElement("div");
        wrap.className = "acg-page";
        wrap.setAttribute("data-page", pageNumber);

        var surface = document.createElement("div");
        surface.className = "acg-page-surface";
        surface.style.width = Math.max(1, Math.floor(cssViewport.width)) + "px";
        surface.style.height = Math.max(1, Math.floor(cssViewport.height)) + "px";

        var canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.floor(renderViewport.width));
        canvas.height = Math.max(1, Math.floor(renderViewport.height));
        canvas.style.width = Math.max(1, Math.floor(cssViewport.width)) + "px";
        canvas.style.height = Math.max(1, Math.floor(cssViewport.height)) + "px";
        canvas.setAttribute("draggable", "false");
        canvas.setAttribute("aria-hidden", "true");

        var textLayer = document.createElement("div");
        textLayer.className = "acg-text-layer";
        textLayer.setAttribute("data-page", pageNumber);

        canvas.addEventListener("contextmenu", function(event){
          event.preventDefault();
        });

        surface.appendChild(canvas);
        surface.appendChild(textLayer);
        wrap.appendChild(surface);
        nextPagesEl.appendChild(wrap);
        nextPageEls.push(wrap);

        var context = canvas.getContext("2d", { alpha:false });
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({
          canvasContext:context,
          viewport:renderViewport
        }).promise;

        if(token !== renderToken) return;

        var textContent = await page.getTextContent({
          includeMarkedContent:true
        });
        if(token !== renderToken) return;

        await pdfjsLib.renderTextLayer({
          textContentSource:textContent,
          container:textLayer,
          viewport:cssViewport,
          textDivs:[]
        }).promise;

        textLayer.setAttribute("data-text-ready", "true");

        if(token !== renderToken) return;

        var annotationLinkCount = await renderPageLinks(
          page,
          cssViewport,
          surface,
          token,
          documentRef
        );
        if(token !== renderToken) return;

        if(annotationLinkCount === 0){
          enhanceDetectedTextLinks(textLayer);
        }

        if(pageNumber === 1 && !replacingVisiblePages){
          loading.hidden = true;
        }
      }

      if(token !== renderToken) return;

      if(replacingVisiblePages){
        var restoreFocus = pagesEl.contains(document.activeElement);
        pagesEl.replaceWith(nextPagesEl);
        pagesEl = nextPagesEl;
        pageEls = nextPageEls;

        if(restoreFocus){
          root.focus({ preventScroll:true });
        }

        var newAnchor = pageEls[Math.min(pageToPreserve, pageEls.length) - 1];
        if(newAnchor){
          stage.scrollTop = Math.max(0,
            newAnchor.offsetTop + (anchorRatio * newAnchor.offsetHeight) -
            (stage.clientHeight / 2)
          );
        }

        var newHorizontalMax = Math.max(0, pagesEl.scrollWidth - stage.clientWidth);
        stage.scrollLeft = Math.max(0, horizontalRatio * newHorizontalMax);
      }else{
        pageEls = nextPageEls;
      }

      loading.hidden = true;
      errorEl.hidden = true;
      observePages();
      updateControls();

      if(!replacingVisiblePages){
        window.requestAnimationFrame(function(){
          scrollToPage(Math.min(pageToPreserve, pageEls.length), false, true);
        });
      }
    }

    function goToPage(pageNumber){
      if(!pdfDoc) return;

      var nextPage = parseInt(pageNumber, 10);
      if(!Number.isFinite(nextPage)) nextPage = currentPage;

      currentPage = Math.max(1, Math.min(pdfDoc.numPages, nextPage));
      updateControls();
      scrollToPage(currentPage, true);
    }

    function setZoom(nextZoom){
      if(!pdfDoc) return;

      zoom = Math.max(0.25, Math.min(2.5, Math.round(nextZoom * 100) / 100));
      updateControls();
      renderAll(currentPage);
    }

    function isPseudoFullscreen(){
      return root.classList.contains("acg-fs");
    }

    function nativeFullscreenElement(){
      return document.fullscreenElement || document.webkitFullscreenElement || null;
    }

    function inFullscreen(){
      return nativeFullscreenElement() === root || isPseudoFullscreen();
    }

    function setFullscreenLabel(active){
      var label = active ? "Salir de pantalla completa" : "Pantalla completa";
      fullButton.setAttribute("aria-label", label);
      fullButton.setAttribute("title", label);
    }

    function enterPseudoFullscreen(){
      if(isPseudoFullscreen()) return;
      root.classList.add("acg-fs");
      document.documentElement.classList.add("acg-fs-lock");
      setFullscreenLabel(true);
      if(pdfDoc) renderAll(currentPage);
    }

    function exitPseudoFullscreen(){
      if(!isPseudoFullscreen()) return;
      root.classList.remove("acg-fs");
      document.documentElement.classList.remove("acg-fs-lock");
      setFullscreenLabel(false);
      if(pdfDoc) renderAll(currentPage);
    }

    function toggleFullscreen(){
      if(inFullscreen()){
        if(isPseudoFullscreen()){
          exitPseudoFullscreen();
        }else{
          var exit = document.exitFullscreen || document.webkitExitFullscreen;
          if(exit) exit.call(document);
        }
        return;
      }

      var request = root.requestFullscreen || root.webkitRequestFullscreen;
      if(request){
        try{
          var result = request.call(root);
          if(result && typeof result.catch === "function"){
            result.catch(enterPseudoFullscreen);
          }
        }catch(ignore){
          enterPseudoFullscreen();
        }
      }else{
        enterPseudoFullscreen();
      }
    }

    function loadBulletin(id){
      var item = BOLETINES.find(function(entry){
        return entry.id === String(id);
      });

      if(!item || !pdfjsLib) return;

      loadToken += 1;
      renderToken += 1;

      var thisLoad = loadToken;

      pdfDoc = null;
      currentPage = 1;
      zoom = DEFAULT_ZOOM;
      pagesEl.innerHTML = "";
      pageEls = [];

      titleEl.textContent = item.title + (item.detail ? " · " + item.detail : "");
      setActiveBulletin(item.id);
      updateControls();
      setLoading("Cargando " + item.title + "…");

      if(loadingTask && typeof loadingTask.destroy === "function"){
        try{
          loadingTask.destroy();
        }catch(ignore){}
      }

      loadingTask = pdfjsLib.getDocument({
        url:bulletinUrl(item),
        withCredentials:false,
        isEvalSupported:false,
        enableScripting:false
      });

      loadingTask.promise.then(function(documentRef){
        if(thisLoad !== loadToken){
          if(documentRef && typeof documentRef.destroy === "function"){
            documentRef.destroy();
          }
          return;
        }

        pdfDoc = documentRef;
        updateControls();
        renderAll(1);
      }).catch(function(error){
        if(thisLoad !== loadToken) return;

        console.error("[Visor ACG] Error al cargar:", error);
        showError("Comprueba que el repositorio sea público y que el archivo exista en la carpeta boletines.");
      });
    }

    function waitForPdfJs(attempt){
      if(typeof window.pdfjsLib !== "undefined"){
        pdfjsLib = window.pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + pdfjsLib.version + "/pdf.worker.min.js";

        var defaultId = root.getAttribute("data-default-boletin") || BOLETINES[0].id;
        loadBulletin(defaultId);
        return;
      }

      if(attempt >= 200){
        showError("No se pudo cargar la librería PDF.js. Revisa la conexión y vuelve a publicar la página.");
        return;
      }

      window.setTimeout(function(){
        waitForPdfJs(attempt + 1);
      }, 50);
    }

    monitorSiteNavigationLayer();
    buildMenu();
    updateControls();

    menuButton.addEventListener("click", function(event){
      event.preventDefault();
      event.stopPropagation();
      openMenu();
    });

    closeButton.addEventListener("click", function(event){
      event.preventDefault();
      closeMenu(true);
    });

    backdrop.addEventListener("click", function(event){
      event.preventDefault();
      closeMenu(true);
    });

    prevButton.addEventListener("click", function(){
      goToPage(currentPage - 1);
    });

    nextButton.addEventListener("click", function(){
      goToPage(currentPage + 1);
    });

    zoomOutButton.addEventListener("click", function(){
      setZoom(zoom - 0.10);
    });

    zoomInButton.addEventListener("click", function(){
      setZoom(zoom + 0.10);
    });

    fitButton.addEventListener("click", function(){
      zoom = 1;
      updateControls();
      renderAll(currentPage);
    });

    fullButton.addEventListener("click", toggleFullscreen);

    pageInput.addEventListener("change", function(){
      goToPage(pageInput.value);
    });

    pageInput.addEventListener("keydown", function(event){
      if(event.key === "Enter"){
        event.preventDefault();
        goToPage(pageInput.value);
        pageInput.blur();
      }
    });

    root.addEventListener("keydown", function(event){
      if(event.target === pageInput) return;

      if(event.key === "ArrowRight" || event.key === "PageDown"){
        event.preventDefault();
        goToPage(currentPage + 1);
      }
      else if(event.key === "ArrowLeft" || event.key === "PageUp"){
        event.preventDefault();
        goToPage(currentPage - 1);
      }
      else if(event.key === "+" || event.key === "="){
        event.preventDefault();
        setZoom(zoom + 0.10);
      }
      else if(event.key === "-" || event.key === "_"){
        event.preventDefault();
        setZoom(zoom - 0.10);
      }
      else if(event.key === "Escape"){
        closeMenu(false);
        exitPseudoFullscreen();
      }
      else if(event.key === "f" || event.key === "F"){
        event.preventDefault();
        toggleFullscreen();
      }
    });

    function onNativeFullscreenChange(){
      setFullscreenLabel(nativeFullscreenElement() === root);
      window.setTimeout(function(){
        if(pdfDoc) renderAll(currentPage);
      }, 120);
    }

    document.addEventListener("fullscreenchange", onNativeFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onNativeFullscreenChange);

    window.addEventListener("resize", function(){
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function(){
        if(!pdfDoc) return;
        if(stage.clientWidth === lastStageWidth) return;
        renderAll(currentPage);
      }, 200);
    });

    waitForPdfJs(0);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", start);
  }else{
    start();
  }
})();
