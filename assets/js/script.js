var snow = true;

$(document).ready(function () {
    if (snow) {
        $('#loadSnow').html(`
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
        `);
    }
});

const select = document.querySelector.bind(document);

const LOADING = {
    overlayElement: select('#loading'),
    
    start: function(){
        this.handleLoad();
    },
    
    // Function handle
    handleLoad: function(){
        let _this = this;
        let transition = 500;
        let ok = false;
        setTimeout(()=>{ok=!ok},1000);
        this.overlayElement.style.transition = `opacity ${transition}ms linear`;
        window.onload = ()=>{
            if(ok)
                hiddenOverlay();
            else
                setTimeout(hiddenOverlay,1000);
        }
        function hiddenOverlay(){
            _this.overlayElement.style.opacity = 0;
            setTimeout(()=>{
                _this.overlayElement.classList.remove('focused');
                _this.overlayElement.style.opacity = 1;
                _this.overlayElement.style.transition = ``;
            },transition);
        }
    }

}

LOADING.start();