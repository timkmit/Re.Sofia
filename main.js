
 var url = "/arr.xlsx";
 var oReq = new XMLHttpRequest();
 var p1, p11, p111;
 var p2, p22, p222;
 var p3, p33, p333;
 var p4, p44, p444;
 var worksheet;
 
 oReq.open("GET", url, true);
 oReq.responseType = "arraybuffer";

 oReq.onload = function(e) {
     var arraybuffer = oReq.response;

     /* convert data to binary string */
     var data = new Uint8Array(arraybuffer);
     var arr = new Array();
     for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
     var bstr = arr.join("");

     var workbook = XLSX.read(bstr, {
         type: "binary"
     });

     
     var first_sheet_name = workbook.SheetNames[0];
     
     var worksheet = workbook.Sheets[first_sheet_name];

     p1 = worksheet['A1'].h;
     p2 = worksheet['B1'].h;
     p3 = worksheet['C1'].h;
     p4 = worksheet['D1'].h;
     p11 = worksheet['A2'].v;
     p22 = worksheet['B2'].v;
     p33 = worksheet['C2'].v;
     p44 = worksheet['D2'].v;
     p111 = worksheet['A3'].h;
     p222 = worksheet['B3'].h;
     p333 = worksheet['C3'].h;
     p444 = worksheet['D3'].h;

     console.log(p1 , p11 , p111);
     console.log(p2 , p22 , p222);
     console.log(p3 , p33 , p333);
     console.log(p4 , p44 , p444);

     console.log(XLSX.utils.sheet_to_json(worksheet, {
         raw: true
     }));
     
     
 }

 oReq.send();
 

 function addTextToInput(anElement) {
    var text = document.getElementById('postNumber').value;
            
            var ars = [p11, p22, p33,p44]
            var ars_p = [p1, p2, p3,p4]
            var ars_n = [p111, p222, p333, p444]
            for(var i = 0; i < 10; i++){
                if(text == ars[i]){
                    alert(`Статус посылки: ${ars_n[i]} для ${ars_p[i]}`)
                location.href='#modal';
                /*document.forms.test.hidden = true;*/
                window.location.reload(true);
          }
            }


 }


