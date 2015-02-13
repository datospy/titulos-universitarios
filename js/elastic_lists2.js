// Add duplicate removal to the array prototype - stolen from some blog

if (!Array.prototype.remove_dups) Array.prototype.remove_dups = function() {
  var result = [];

  label:for(var i=0; i<this.length;i++ ) {  
    for(var j=0; j<this.length; j++) {
      if(result[j]==this[i]) 
      continue label;
    }

    result[result.length] = this[i];
  }

  return result;
}

function TextAbstract(text, length) {
    if (text == null) {
        return "";
    }
    if (text.length <= length) {
        return text;
    }
    text = text.substring(0, length);
    last = text.lastIndexOf(" ");
    text = text.substring(0, last);
    return text + "...";
}       

String.prototype.initCap = function () {
   return this.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
      return m.toUpperCase();
   });
};


 
 function toCamelCase(sentenceCase) {
    var out = "";
    sentenceCase.split(" ").forEach(function (el, idx) {
        var add = el.toLowerCase();
        out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
    });
    return out;
}


apariencia = function () {









    $("svg > g > g:eq(0) > g > rect").attr("fill","#5fa4bf");
    $("svg > g > g:eq(1) > g > rect").attr("fill","#77bad4");
    $("svg > g > g:eq(2) > g > rect").attr("fill","#92cee4");
    $("svg > g > g:eq(3) > g > rect").attr("fill","#b3e0f2");

    $("svg > g > g > g > rect").parent().next().children().attr("fill", "#333333");
    $("svg > g > g > g > rect").parent().next().next().children().attr("fill", "#333333");
$("svg > g > g > g > rect").hover( function() {
         $(this).attr("fill","#fc4349");
         $(this).parent().next().children().attr("fill", "white");
         $(this).parent().next().next().children().attr("fill", "white");

      }, function (){
        $(this).parent().next().children().attr("fill", "#333333");
         $(this).parent().next().next().children().attr("fill", "#333333");
      });

    $("svg > g > g:eq(0) > g > rect").hover( function() {
         $(this).attr("fill","#fc4349");
         

      });
    $("svg > g > g:eq(1) > g > rect").hover( function() {
         $(this).attr("fill","#fd7277");
          $(this).attr("color","white");
      });
    $("svg > g > g:eq(2) > g > rect").hover( function() {
         $(this).attr("fill","#fe9599");
          $(this).attr("color","white");
      });
    $("svg > g > g:eq(3) > g > rect").hover( function() {
         $(this).attr("fill","#feb0b3");
          $(this).attr("color","white");
      });

      if($("svg > g > g:eq(0) > g > rect").length == 1) { $("svg > g > g:eq(0) > g > rect").attr("fill","#fc4349");$("svg > g > g:eq(0) > g > rect").parent().next().next().children().attr("fill", "white"); ;$("svg > g > g:eq(0) > g > rect").parent().next().children().attr("fill", "white").css('font-size', "17px"); }
      if($("svg > g > g:eq(1) > g > rect").length == 1) { $("svg > g > g:eq(1) > g > rect").attr("fill","#fd7277");$("svg > g > g:eq(1) > g > rect").parent().next().next().children().attr("fill", "white");$("svg > g > g:eq(1) > g > rect").parent().next().children().attr("fill", "white").css('font-size', "17px");  }
      if($("svg > g > g:eq(2) > g > rect").length == 1) { $("svg > g > g:eq(2) > g > rect").attr("fill","#fe9599");$("svg > g > g:eq(2) > g > rect").parent().next().next().children().attr("fill", "white");$("svg > g > g:eq(2) > g > rect").parent().next().children().attr("fill", "white").css('font-size', "17px");  }
      if($("svg > g > g:eq(3) > g > rect").length == 1) { $("svg > g > g:eq(3) > g > rect").attr("fill","#feb0b3");$("svg > g > g:eq(3) > g > rect").parent().next().next().children().attr("fill", "white");$("svg > g > g:eq(3) > g > rect").parent().next().children().attr("fill", "white").css('font-size', "17px");  }

      


    $("svg > g > g > g > rect").each(function(index) {

            $( this ).parent().next().css('font-weight', "bold");
            $( this ).parent().next().css('font-size', "bold");
            $( this ).parent().next().next().css('font-size', "11px");


            ;});



    $("svg > g > g > g > rect").filter(function () {
              return $(this).attr("height") > 14;
          }).each(function(index) {

            $( this ).parent().next().css('font-size', "14px");
            $( this ).parent().next().next().css('font-size', "11px");
            $( this ).parent().next().css('font-weight', "bold");


            ;});

    
    $("svg > g > g > g > rect").filter(function () {
              return $(this).attr("height") < 14;
          }).each(function(index) {

            $( this ).parent().next().css('font-size', "0px");
            $( this ).parent().next().next().css('font-size', "0px");
            $( this ).parent().next().css('font-weight', "bold");


            ;});






      $("svg > g > g > g > rect").hover( function() {
                $( this ).parent().next().css('font-size', "17px");
                  $( this ).parent().next().next().css('font-size', "11px");

        }, function() {
                  if ($(this).attr("height") < 14){
                  $( this ).parent().next().css('font-size', "0px");
                  $( this ).parent().next().next().css('font-size', "0px");}

                  else{

                     $( this ).parent().next().css('font-size', "14px");
                  $( this ).parent().next().next().css('font-size', "11px");
                  }


        });

      var anio= $("svg > g > g:eq(0) > g > rect").length; 
      var institucion= $("svg > g > g:eq(1) > g > rect").length; 
      var carrera= $("svg > g > g:eq(2) > g > rect").length; 
      var titulo= $("svg > g > g:eq(3) > g > rect").length; 



      $("#total_anio").html(anio);
      $("#total_institucion").html(institucion);
      $("#total_carrera").html(carrera);
      $("#total_titulo").html(titulo);


}                   

var Lists = function(facets, data, h, w, f, spacing, canvas, callback) {
  pv.Layout.call(this);
                     
  var cached_data = [],  
      data_stale = true,  
      bins = [], 
      orig_bins = [],           
      totals = [],
      col_vals = [],
      bin_vals = [],
      col_selections = [],
      bin_selections = [],
      y = [],                                       // y-scales
      char_test = new RegExp("([A-Z]|[a-z])+"),     // test for text vs. numeric columns       
      that = this;

  var floory = function(y) {
    if(y > f) {
      return y;
    } else {
      return f;
    }
  }

  var total_height = function(a, b) {
    if(b.y == 0) {
      return a;
    } else {           
      return a + floory(b.y) + spacing;
    }
  }

  var filtered_data = this.data = function() {
    if(data_stale) {               
      var relevant_columns = [];

      relevant_columns = bin_selections.map(function(e,i) {

        // reduce on bin_vals and bin_selections to figure out if a column has a selection

        return bin_vals[i].reduce(function(a,b) {
          return a || e[b];
        },false);
      });                        

      cached_data = data.filter(function(e,i) {
        return relevant_columns.reduce(function(a,b,j) {
          if(b === true) {                                                                   
            return a && col_selections[j][(e[facets[j]["name"]])];
          } else {
            return a && true;
          }
        },true);         
      });                                        

      data_stale = false;

      return cached_data;
    } else {
      return cached_data;
    }     
  }   
       
  this.reset = function() {
    cached_data = data;
    
    // build arrays of all values for each column, sorted      
    facets.forEach(function(e,i){

      //if(e["name"] != "cantidad_titulos"){
      var temp_col = [];
      col_vals[i] = [];     

      // build selection map
      col_selections[i] = {};
      bin_selections[i] = {};

      data.forEach(function(f){
          temp_col.push(f[e["name"]]); 
      });

      // Remove duplicates from column values.
      col_vals[i] = temp_col.remove_dups();  

      // If not already defined in the facets["type"] key, figure out to the best of our
      // ability if the column is text or numeric. User can over-ride by defining this
      // key in the facets data structure.

      if(!e["type"]) {
        if(char_test.test(col_vals[i].join())) {
          e["type"] = "T";
        } else {
          e["type"] = "N";
        }
      }                                                                      

      // use default sort or number sort, depending on if column contains a-z or A-Z characters
      if(e["type"] == "T") {
        col_vals[i].sort();
        
      } else {
        col_vals[i].sort(function(a,b){
          return a-b;
        });
      } 
     // }                                         
    });  

    // build arrays of values to use as bins, based on column value arrays
    col_vals.forEach(function(e,i){ 
      if(facets[i]["type"] == "T") {
        bin_vals[i] = e;

      } else {
        bin_vals[i] = pv.range(Math.round((col_vals[i].shift() - facets[i]["step"]) / facets[i]["step"]) * facets[i]["step"],
          Math.round((col_vals[i].pop() + facets[i]["step"]) / facets[i]["step"]) * facets[i]["step"],
          facets[i]["step"]); 
      }
    });   



    // Build histogram bins                        
    // Note: All the function junk in there is to memoize/cache based
    // on facets[i]["stale"] being true/false  

    facets.forEach(function(e,i){ 

      e["stale"] = true;  

        // We redo the protovis histogram bin implementation to handle text-based values
        // with the same API as bins (minus .dx). 

      bins.push((function () {   
        var bs = [];

        var bin_func = function(){
          if(e["stale"]) {

            bs = [];     

            if(e["type"] == "T") {     

              // Initialize bins                       
              col_vals[i].forEach(function(a,j) {
                var bin = bs[j] = [];
                bin.x = a;
                bin.dx = 1; 

                filtered_data().filter(function(b) {
                  return b[facets[i]["name"]] == a;
                }).forEach(function(b) {
                  bin.push(b);
                });

                //utilizamos el campo cantidad de titulop ara multiplicar por la cantidad de registros.
                var sum = 0;        
                for(var cant =0;  cant<bin.length;cant++){
                  sum = sum + bin[cant]["cantidad_titulos"];
                }

                bin.y = sum;//bin.length;
              });   

            } else {  
              bs = pv.histogram(filtered_data(), function(d) { 
                return d[e["name"]] })
                .bins(bin_vals[i]) 
            } 


            bs.sort(function(a,b) {
              return b.y - a.y;
            });  

            e["stale"] = false; 
          }  

          return bs;
        }; 

        return bin_func;
      }()));                         
    });

    // build static cache of bin values for full data set
    facets.forEach(function(e,i) {
      orig_bins[i] = {};

      bins[i]().forEach(function(f) {
        function Bin(y,bins) {
          this.y = y;
          this.bins = bins;
        }      

        orig_bins[i][f.x] = new Bin(f.y, f)
      });                 
    }); 

    // calculate totals for each list visualization
    bins.forEach(function(e,i){
      totals.push(function() {
        return e().reduce(total_height,0) - spacing;
      }); 
    });

    // set up y-scales for each list visualization              
    totals.forEach(function(e){      
      y.push(function() {
        return pv.Scale.linear(0,e()).range(0,h);
      })   
    });
    
    return this;
  }     
                
  this.render = function() {       
         
    var outside_panel = new pv.Panel()
      .width((w + 10) * y.length + 10).height(h + 10).fillStyle("white") //color de borde arriba abajo
      .canvas(canvas);                    
    
    var list = outside_panel.add(pv.Panel)
      .data(bins) 
      .top(5)
      .left(function() {
        return 10 +((w + 10) * this.index );
      })
      .width(w).height(h).fillStyle("#333333"); //color de lineas separadoras
    
    // Column name labels
   /* 
    list.anchor("top").add(pv.Label)
      .top(-15)     
      .font("bold 11px sans-serif")
      .text(function() {
        var full_label = facets[this.parent.index]["name"].toLowerCase();
        return full_label.substring(0,1).toUpperCase().concat(full_label.substring(1));
      });  */        
    
    var panel = list.add(pv.Panel)  
      .data(function(d){       
        return d();
      })                         
      .top(function() {              
        var sliced = bins[this.parent.index]().slice(0,this.index);
        var r = sliced.reduce(total_height, 0);
        return y[this.parent.index]()(r);
      })     
      .height(function(d) { 
        return y[this.parent.index]()(floory(d.y)) })
      .visible(function(d) { return !(d.y == 0);})
    
    var section = panel.add(pv.Bar)           
      .def("active", false)     
      .fillStyle(function(d) {
/*Gris:#d7dadb
AzulOscuro:#2c3e50
Celeste:#6dbcdb
Rojo:#fc4349
                                hover                                                    activo          normal*/                                                                              
        return this.active() ? "#6dbcdb" : bin_selections[this.parent.parent.index][d.x] ? "#888888" : "#d7dadb"
      })
      .event("mouseover", function() { 


      //  this.active(true); this.render();
        //apariencia();

        
    



         })
      .event("mouseout", function() { this.active(false); this.render(); apariencia();
     



       })
      .event("click", function(d) { 
        // Make sure we properly set a selection for each element in the bin.
          $("*").unbind("click");
        orig_bins[this.parent.parent.index][d.x].bins.forEach(function(b,i) { 
          col_selections[this.parent.parent.index][b[facets[this.parent.parent.index]["name"]]] = 
            !bin_selections[this.parent.parent.index][d.x];  
        }, this);               

        // Make sure we have a selection that exactly matches the bin.          
        bin_selections[this.parent.parent.index][d.x] = !bin_selections[this.parent.parent.index][d.x];   

        this.active(false);
        data_stale = true;  

        facets.forEach(function(c) {
          c["stale"] = true;
        })                                                            

        list.render(); 
        apariencia();
        apariencia();
        apariencia();


        



        if(callback) {
          callback();   
        }; 
        
        
        
        addId();
      }); 
      
      /*
       * agrega id a todos los elementos, de esta manera es posible capturarlo con javascript para simular un click
       */
      
      addId = function(){
            var v_g = document.getElementsByTagName('g');     
            for(var cant =0;  cant<v_g.length;cant++){
                var v_hijos = v_g[cant].children;
                if(v_hijos[0].tagName=="rect"){
                    aux = v_hijos[0];
                }else if(aux != null && v_hijos[0].tagName=="text"){
                   // console.log(aux);
                    aux.id = v_hijos[0].innerHTML.replace(/(\s+|\.|\/)+/g, '').toUpperCase();
                    aux = null;
                }
            }
        }
    
    section.anchor("left").add(pv.Label).size(12).fillStyle("#333333")
      .text(function(d) {

        var value = d.x;

        if(facets[this.parent.parent.index]["type"] == "N") {
          value++;
        } 

        var range = "";

        if(facets[this.parent.parent.index]["step"] > 1) {
          range = " to " + (d.x + facets[this.parent.parent.index]["step"]);
        }

        var t = value.toString() + range;
        if( d.y > 0 ) { 
          //return camelize(t) ; 
          return TextAbstract(t.initCap(), 25) /*+ " - \n" + d.y*/ ; 
        }
      }); 
    
    section.anchor("right").add(pv.Label).size(10).fillStyle("#333333")
      .text(function(d) { 
      var percentage = (d.y/orig_bins[this.parent.parent.index][d.x].y)*100;

        return d.y /* "/" + orig_bins[this.parent.parent.index][d.x].y +*/ /*"- \n \n" + percentage.toFixed(2)  + "%"*/;
      });
    
    outside_panel.render();      
    
    return that;    
  }                                             
};   

Lists.prototype = pv.extend(pv.Layout)
    .property("facets", Array)
    .property("height", Number)
    .property("width", Number)
    .property("floor", Number)
    .property("spacing", Number)
    .property("canvas", String)
    .property("callback", Function);   
                                       
Lists.prototype.defaults = new Lists()
    .extend(pv.Layout.prototype.defaults)
    .facets([])
    .height(0)
    .width(0)
    .floor(0)
    .spacing(0)
    .canvas(undefined)
    .callback(function() { })
       
