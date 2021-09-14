import { Component,AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  {
  @ViewChild('svgContent') svgElem:ElementRef; 
  @ViewChild('captureCanvas') captureCanvas:ElementRef;
  @ViewChild('btndownload') btndownload:ElementRef;

  title = 'image-editor-tool';
  defaultFilterArr = ["1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0"];
  filterValArr = ["1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0"];
  filterListArr = [{name:"purple" ,value:"1 -0.2 0 0 0 0 1 0 -0.1 0 0 1.2 1 0.1 0 0 0 1.7 1 0"},
                    {name:"yellow",value:"1 0 0 0 0 -0.2 1.0 0.3 0.1 0 -0.1 0 1 0 0 0 0 0 1 0"},
                    {name:"cyan",value:"1 0 0 1.9 -2.2 0 1 0 0.0 0.3 0 0 1 0 0.5 0 0 0 1 0.2"},
                    {name:"blackwhite",value:"0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 1 0"},
                    {name:"oldtime",value:"1 0 0 0 0 -0.4 1.3 -0.4 0.2 -0.1 0 0 1 0 0 0 0 0 1 0"},
                    {name:'coldlife',value:"1 0 0 0 0 0 1 0 0 0 -0.2 0.2 0.1 0.4 0 0 0 0 1 0"},
                    {name:'sepium',value:"1.3 -0.3 1.1 0 0 0 1.3 0.2 0 0 0 0 0.8 0.2 0 0 0 0 1 0"},
                    {name:"milk",value:"0 1.0 0 0 0 0 1.0 0 0 0 0 0.6 1 0 0 0 0 0 1 0"}
                    ]; 
  ngAfterViewInit() {
    let defElem = this.svgElem.nativeElement.querySelector('defs');
        defElem.querySelector('#filter2028'); 
        console.log(this.svgElem.nativeElement.querySelector('#feColorMatrix2028').getAttribute('values'))
  }
  convertToFilterString(fArr){
    if(fArr){
      return fArr.join(' ');
    }
  }

  rangeValChange(event,index){
   let fVal = event.target.value;
    if(typeof index != 'undefined' && fVal){
      this.defaultFilterArr[index] = fVal;
    }
    this.svgElem.nativeElement.querySelector('#feColorMatrix2028').setAttribute("values", this.convertToFilterString(this.defaultFilterArr));
    //console.log(this.convertToFilterString(this.defaultFilterArr));
  }
  
  applyFilterFromList(findex){
    console.log(findex);
    if(typeof findex != 'undefined' && this.filterListArr[findex]) {
      this.defaultFilterArr = this.filterListArr[findex].value.split(' ');
      this.filterValArr = this.filterListArr[findex].value.split(' ');
      this.svgElem.nativeElement.querySelector('#feColorMatrix2028').setAttribute("values", this.convertToFilterString(this.defaultFilterArr));
    }
  }

  downloadImage(){
    let self = this;
    let copyCanvas = this.svgElem.nativeElement.cloneNode(true),
        images = copyCanvas.getElementsByTagName('image');
    for(let i=0;i<images.length;i++){
      if(images[i] && images[i].getAttribute('xlink:href')) {
        this.convertToBase64(images[i].getAttribute('xlink:href'),i,function(data,index){
          images[index].setAttribute('xlink:href',data.result);
          if(index == images.length -1){
            self.captureFinalImage(copyCanvas.outerHTML,function(data){
              // self.btndownload.nativeElement.href = data;
              // self.btndownload.nativeElement.download = 'converted.png';
              let aelem = document.createElement('a');
              aelem.download = 'converted.png';
              aelem.href = data;
              aelem.click();
            });
          }
        });
         
      }
    }
   
  }
  captureFinalImage(svgStr,callback) { 
    let image = new Image();
    let capCanvas =  this.captureCanvas.nativeElement;
    let canvasCtx = capCanvas.getContext('2d');
    image.onload = function(){
      capCanvas.height = image.height;
      capCanvas.width = image.width;
    canvasCtx.drawImage(this, 0, 0);   
    let b64Data = capCanvas.toDataURL("image/png");
    callback(b64Data);
    }
    image.src = 'data:image/svg+xml; charset=utf8 ,'+ encodeURIComponent(svgStr)
  }
  convertToBase64(url, index, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(this, index);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
  }

}

//https://jorgeatgu.github.io/svg-filters/
//https://testdrive-archive.azurewebsites.net/graphics/hands-on-css3/hands-on_svg-filter-effects.htm
//https://kazzkiq.github.io/svg-color-filter/
//https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/

//Image Filters
//https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#filters
// /https://webplatform.github.io/docs/svg/tutorials/smarter_svg_filters/
