function createContract() {

//  verwijder mogelijke oude foutberichten
     $('#response').text("");
   
// verifieer verplichte input gegevens
    if ($('select[name=customer]').val() === 'none'){
      $('#response').html("</br> Geen Customer gegeven!");
    }    
    
    if ($('select[name=verkoper]').val() === 'none'){
      $('#response').append("</br> Geen Verkoper gegeven!");
    }    
    
    if ($('select[name=asset]').val() === 'none'){
      $('#response').append("</br> Geen Asset gegeven!");
    } 
    
//  Als er geen foutbericht is, dan is alle data aanwezig   
    if ($('#response').text() === ''){
      $('select[name=status	]').val("nieuw");
    }

}

function updateContract() {
    
//  verwijder mogelijke oude foutberichten
     $('#response').text("");
   
// verifieer verplichte input gegevens
    if ($('select[name=customer]').val() === 'none'){
      $('#response').html("</br> Geen Customer gegeven!");
    }    
    
    if ($('select[name=verkoper]').val() === 'none'){
      $('#response').append("</br> Geen Verkoper gegeven!");
    }    
    
    if ($('select[name=asset]').val() === 'none'){
      $('#response').append("</br> Geen Asset gegeven!");
    }   
    
    if ($('select[name=status]').val() === 'none'){
      $('#response').append("</br> Geen Status beschikbaar!");
    }   
	
    if ($('select[name=status]').val() !== 'nieuw'){
      $('#response').append("</br> Ongeldige Status!");
    }  
    
//  Als er geen foutbericht is, dan kan de status naar 'onderweg'   
    if ($('#response').text() === ''){
      $('select[name=status]').val("onderweg");
    }

}

function closeContract() {
    
//  verwijder mogelijke oude foutberichten
     $('#response').text("");
   
// verifieer verplichte input gegevens
    if ($('select[name=customer]').val() === ''){
      $('#response').html("</br> Geen Customer gegeven!");
    }    
    
    if ($('select[name=verkoper]').val() === ''){
      $('#response').append("</br> Geen Verkoper gegeven!");
    }    
    
    if ($('select[name=asset]').val() === ''){
      $('#response').append("</br> Geen Asset gegeven!");
    }   

    if ($('select[name=status]').val() !== 'onderweg'){
      $('#response').append("</br> Alleen status 'onderweg' kan afgesloten worden!");
    }  
    
//  Als er geen foutbericht is, dan kan de status naar 'gesloten'    
    if ($('#response').is(':empty')){
      $('select[name=status]').val("gesloten");
    }

}
