var reg_start_p = document.getElementsByClassName("start")[0];
var cust_next_p = document.getElementsByClassName("next")[0];
var full_name_next_p = document.getElementsByClassName("full_name_next")[0];
var address_next_p = document.getElementsByClassName("address_next")[0];
var address_previous_p = document.getElementsByClassName("address_previous")[0];
var phone_next_p = document.getElementsByClassName("phone_next")[0];
var phone_previous_p = document.getElementsByClassName("phone_previous")[0];
var email_next_p = document.getElementsByClassName("email_next")[0];
var email_previous_p = document.getElementsByClassName("email_previous")[0];
var query_next_p = document.getElementsByClassName("query_next")[0];
var query_previous_p = document.getElementsByClassName("query_previous")[0];
var feedback_next_p = document.getElementsByClassName("feedback_next")[0];
var feedback_previous_p = document.getElementsByClassName("feedback_previous")[0];
var suggestions_next_p = document.getElementsByClassName("suggestions_next")[0];
var suggestions_previous_p = document.getElementsByClassName("suggestions_previous")[0];
var recommendation_next_p = document.getElementsByClassName("recommendation_next")[0];
var recommendation_previous_p = document.getElementsByClassName("recommendation_previous")[0];
var reference_next_p = document.getElementsByClassName("reference_next")[0];
var reference_previous_p = document.getElementsByClassName("reference_previous")[0];
var others_next_p = document.getElementsByClassName("others_next")[0];
var others_previous_p = document.getElementsByClassName("others_previous")[0];
var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");
var full_name = document.getElementsByClassName("full_name")[0];
var address = document.getElementsByClassName("address")[0];
var street_address_1 = document.getElementById("street_address_1");
var street_address_2 = document.getElementById("street_address_2");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zip = document.getElementById("zip");
var country = document.getElementById("country");
var area_code = document.getElementById("area_code");
var phone_number = document.getElementById("phone_number");
var others_inp = document.getElementById("others");
var phone = document.getElementsByClassName("phone")[0];
var query = document.getElementById("query");
var query_class = document.getElementsByClassName("query")[0];
var customer_details = document.getElementsByClassName("customer_details")[0];
var welcome = document.getElementsByClassName("welcome")[0];
var email = document.getElementsByClassName("email")[0];
var email_inp = document.getElementById("email");
var feedback = document.getElementsByClassName("feedback")[0];
var others = document.getElementsByClassName("others")[0];
var recommendation = document.getElementsByClassName("recommendation")[0];
var reference = document.getElementsByClassName("reference")[0];
var suggestions = document.getElementsByClassName("suggestions")[0];
var others_selected = false;
var left_arrow = document.getElementsByClassName("left_arrow");
var right_arrow = document.getElementsByClassName("right_arrow");
var error = document.getElementsByClassName("error")[0];
var end = document.getElementsByClassName("end")[0];
var myCarousel = document.getElementsByClassName("myCarousel")[0];
var radio_address = document.getElementsByClassName("radio_address")[0];
var radio_full_name = document.getElementsByClassName("radio_full_name")[0];
var radio_phone_number = document.getElementsByClassName("radio_phone_number")[0];
var radio_email = document.getElementsByClassName("radio_email")[0];
var radio_query = document.getElementsByClassName("radio_query")[0];
var radio_feedback = document.getElementsByClassName("radio_feedback")[0];
var radio_suggestions = document.getElementsByClassName("radio_suggestions")[0];
var radio_recommendation = document.getElementsByClassName("radio_recommendation")[0];
var radio_reference = document.getElementsByClassName("radio_reference")[0];
var radio_others = document.createElement("input");
var radio_inline = document.getElementsByClassName("radio-inline");
var radio_others_activated = false;
var temp_radio_inline = document.createElement("label");
temp_radio_inline.setAttribute("class", "radio-inline addOthersRadio");
var attrObj = {"data-toggle" : "tooltip"
    , "title" : "Others", "class" : "radio_others", "type" : "radio", "name": "optradio"};
var checkFilled = {"Full Name" : false, "Address" : false, "Phone Number" : false, "Query" : false, "Others" : false};





window.onload = function() {
    clear_all();
    welcome.style.display = "block";
};

if(cust_next_p){
    cust_next_p.addEventListener('mouseover', arrow_animate);
    cust_next_p.addEventListener('click', full_name_page);
}

if(reg_start_p){
    reg_start_p.addEventListener('mouseover', arrow_animate);
    reg_start_p.addEventListener('click', customer_details_page);
}

if(full_name_next_p) {
    full_name_next_p.addEventListener('click', full_name_validate);
    full_name_next_p.addEventListener('mouseover', arrow_animate);
}  

if(address_next_p){
    address_next_p.addEventListener('click', address_validate);
    address_next_p.addEventListener('mouseover', arrow_animate);
}    
    
if(address_previous_p) {
    address_previous_p.addEventListener('mouseover', arrow_animate_previous);
    address_previous_p.addEventListener('click', full_name_page);
}

if(phone_next_p){
    phone_next_p.addEventListener('mouseover', arrow_animate);
    phone_next_p.addEventListener('click', phone_validate);
}    
    
if(phone_previous_p) {
    phone_previous_p.addEventListener('mouseover', arrow_animate_previous);
    phone_previous_p.addEventListener('click', address_page);
}   

if(email_next_p){
    email_next_p.addEventListener('click', email_validate);
    email_next_p.addEventListener('mouseover', arrow_animate);
}    
   
if(email_previous_p) {
    email_previous_p.addEventListener('mouseover', arrow_animate_previous);
    email_previous_p.addEventListener('click', phone_page);
}   

if(query_next_p){
    query_next_p.addEventListener('click', query_validation);
    query_next_p.addEventListener('mouseover', arrow_animate);
}    

if(query_previous_p) {
    query_previous_p.addEventListener('mouseover', arrow_animate_previous);
    query_previous_p.addEventListener('click', email_page);   
}

if(feedback_next_p){
    feedback_next_p.addEventListener('click', suggestions_page);
    query_next_p.addEventListener('mouseover', arrow_animate);
}    
    

if(feedback_previous_p){
    feedback_previous_p.addEventListener('mouseover', arrow_animate_previous);
    feedback_previous_p.addEventListener('click', select_others_or_query);
}

if(suggestions_next_p){
    suggestions_next_p.addEventListener('mouseover', arrow_animate);
    suggestions_next_p.addEventListener('click', recommendation_page);
}    

if(suggestions_previous_p) {
    suggestions_previous_p.addEventListener('mouseover', arrow_animate_previous);
    suggestions_previous_p.addEventListener('click', feedback_page);
}

if(recommendation_next_p){
    recommendation_next_p.addEventListener('mouseover', arrow_animate);
    recommendation_next_p.addEventListener('click', reference_page);
} 

if(recommendation_previous_p) {
    recommendation_previous_p.addEventListener('mouseover', arrow_animate_previous);
    recommendation_previous_p.addEventListener('click', suggestions_page);
}

if(reference_next_p){
    reference_next_p.addEventListener('click', checkFunction);
    reference_next_p.addEventListener('mouseover', arrow_animate);
}    
    

if(reference_previous_p) {
    reference_previous_p.addEventListener('mouseover', arrow_animate_previous);
    reference_previous_p.addEventListener('click', recommendation_page);
}    

if(first_name || last_name || street_address_1 || street_address_2 || 
    city || state || zip || area_code || phone_number || email_inp){
    first_name.onfocus = mouse_inside_text;
    first_name.onblur = mouse_outside_text;
    last_name.onfocus = mouse_inside_text;
    last_name.onblur = mouse_outside_text;
    last_name.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            full_name_next_p.click();
        }
    };
    first_name.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            full_name_next_p.click();
        }
    };
    street_address_1.onfocus = mouse_inside_text;
    street_address_1.onblur = mouse_outside_text;
    street_address_2.onfocus = mouse_inside_text;
    street_address_2.onblur = mouse_outside_text;
    city.onfocus = mouse_inside_text;
    city.onblur = mouse_outside_text;
    state.onfocus = mouse_inside_text;
    state.onblur = mouse_outside_text;
    zip.onfocus = mouse_inside_text;
    zip.onblur = mouse_outside_text;
    street_address_1.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            address_next_p.click();
        }
    };
    street_address_2.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            address_next_p.click();
        }
    };
    city.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            address_next_p.click();
        }
    };
    state.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            address_next_p.click();
        }
    };
    zip.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            address_next_p.click();
        }
    };
    area_code.onfocus = mouse_inside_text;
    area_code.onblur = mouse_outside_text;
    phone_number.onfocus = mouse_inside_text;
    phone_number.onblur = mouse_outside_text;
    area_code.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            phone_next_p.click();
        }
    };
    phone_number.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            phone_next_p.click();
        }
    };
    email_inp.onfocus = mouse_inside_text;
    email_inp.onblur = mouse_outside_text;
    email.onkeyup = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            email_next_p.click();
        }
    };
}


if(others_next_p){
    others_next_p.addEventListener('mouseover', arrow_animate);
    others_next_p.addEventListener('click', others_validate);
}

if(others_previous_p){
    others_previous_p.addEventListener('mouseover', arrow_animate_previous);
    others_previous_p.addEventListener('click', query_page);
}

if(radio_address){
    // radio_address.addEventListener('mouseover', displayTooltip);
    radio_address.addEventListener('click', address_page);
}
if(radio_full_name){
    radio_full_name.addEventListener('click', full_name_page);
}

if(radio_phone_number){
    radio_phone_number.addEventListener('click', phone_page);
}

if(radio_email){
    radio_email.addEventListener('click', email_page);
}

if(radio_query){
    radio_query.addEventListener('click', query_page);
}

if(radio_feedback){
    radio_feedback.addEventListener('click', feedback_page);
}

if(radio_suggestions){
    radio_suggestions.addEventListener('click', suggestions_page);
}

if(radio_recommendation){
    radio_recommendation.addEventListener('click', recommendation_page);
}

if(radio_reference){
    radio_reference.addEventListener('click', reference_page);
}

if(radio_others){
    radio_others.addEventListener('click', others_page);
}



function refresh_error() {
    error.textContent = "This field is required.";
    error.style.display = "none";
}

function clear_all() {
    welcome.style.display = "none";
    myCarousel.style.display = "none";
    error.style.display = "none";
    address.style.display = "none";
    customer_details.style.display = "none";
    email.style.display = "none";
    feedback.style.display = "none";
    full_name.style.display = "none";
    others.style.display = "none";
    phone.style.display = "none";
    query_class.style.display = "none";
    recommendation.style.display = "none";
    reference.style.display = "none";
    suggestions.style.display = "none";
    end.style.display = "none";
    radio_full_name.removeAttribute("checked");
    radio_address.removeAttribute("checked");    
    radio_phone_number.removeAttribute("checked");
    radio_email.removeAttribute("checked");
    radio_query.removeAttribute("checked");
    radio_feedback.removeAttribute("checked");
    radio_suggestions.removeAttribute("checked");
    radio_recommendation.removeAttribute("checked");
    radio_reference.removeAttribute("checked");
    radio_others.removeAttribute("checked");    
    radio_full_name.classList.remove("big_option");
    radio_address.classList.remove("big_option");    
    radio_phone_number.classList.remove("big_option");
    radio_email.classList.remove("big_option");
    radio_query.classList.remove("big_option");
    radio_feedback.classList.remove("big_option");
    radio_suggestions.classList.remove("big_option");
    radio_recommendation.classList.remove("big_option");
    radio_reference.classList.remove("big_option");
    radio_others.classList.remove("big_option");
} 


function customer_details_page(){
    refresh_error();
    clear_all();
    customer_details.style.display = "block";
}

function full_name_page() {
    refresh_error();
    clear_all();
    myCarousel.style.display = "block";
    radio_full_name.checked = true;
    radio_full_name.classList.add("big_option");
    full_name.style.display = "block";
}

function address_page() {
    refresh_error();
    clear_all();
    myCarousel.style.display = "block";
    radio_address.checked = true;
    radio_address.classList.add("big_option");
    address.style.display="block";
} 

function phone_page() {
    refresh_error();
    clear_all();
    myCarousel.style.display = "block";
    radio_phone_number.checked = true;
    radio_phone_number.classList.add("big_option");
    phone.style.display = "block";
}

function email_page() {
    refresh_error();
    clear_all();
    myCarousel.style.display = "block";
    radio_email.checked = true;
    radio_email.classList.add("big_option");
    email.style.display = "block";
}

function query_page() {
    refresh_error();
    clear_all();
    myCarousel.style.display = "block";
    radio_query.checked = true;
    radio_query.classList.add("big_option");
    query_class.style.display = "block";
}

function feedback_page() {
    refresh_error();
    clear_all();
    if(temp_radio_inline.parentNode && !radio_others_activated){
        for(let i = 0; i < radio_inline.length; i++){
            radio_inline[i].classList.remove("addOthersRadio");
        }
        temp_radio_inline.parentNode.removeChild(temp_radio_inline);
    }
    myCarousel.style.display = "block";
    radio_feedback.checked = true;
    radio_feedback.classList.add("big_option");
    feedback.style.display = "block";
}

function suggestions_page() {
    refresh_error();
    clear_all();
    myCarousel.style.display = "block";
    radio_suggestions.checked = true;
    radio_suggestions.classList.add("big_option");
    suggestions.style.display = "block";
}

function recommendation_page() {
    refresh_error();
    clear_all();
    myCarousel.style.display = "block";
    radio_recommendation.checked = true;
    radio_recommendation.classList.add("big_option");
    recommendation.style.display = "block";
}

function reference_page() {
    refresh_error();
    clear_all();
    myCarousel.style.display = "block";
    radio_reference.checked = true;
    radio_reference.classList.add("big_option");
    reference.style.display = "block";
}

function others_page() {
    refresh_error();
    clear_all();
    radio_others.checked = true;
    if(!radio_others_activated){
        setAttrHelp();
    }
    radio_others.classList.add("big_option");
    myCarousel.style.display = "block";
    others.style.display = "block";
}

function end_page() {
    refresh_error();
    clear_all();
    reference.style.display = "none";
    end.style.display = "block";
    setTimeout(function(){
        end.innerHTML = "<h2>Redirecting...</h2>";
    }, 3000);
    setTimeout(function(){
        history.go(0);
    }, 5000);   
}

function mouse_inside_text(event) {
    event.target.ogplaceholder = event.target.placeholder;
    event.target.placeholder = "";
}

function mouse_outside_text(event) {
    event.target.placeholder = event.target.ogplaceholder;
}

function full_name_validate() {
    if(first_name.value == "" || last_name.value == ""){
        checkFilled["Full Name"] = false;
        error.style = "display:block; bottom: 39%";
        full_name_vibrate();
    }else{
        error.style.display = "none";
        checkFilled["Full Name"] = true;
        address_page();
    }
}


function full_name_vibrate() {
    full_name.classList.add('vibrate');
    setTimeout(removeVibrateClass_full_name, 210);
} 

function removeVibrateClass_full_name() {
    full_name.classList.remove('vibrate');
}

function address_validate(event) {
    if(street_address_1.value=="" || 
    street_address_2.value=="" || city.value=="" || 
    state.value=="" || zip.value=="" || 
    country.value==""){
        checkFilled["Address"] = false;
        error.style = "display:block; bottom:25%";
        address_vibrate();
    }else{
        checkFilled["Address"] = true;
        error.style.display = "none";
        phone_page();
    }
}

function address_vibrate() {
    address.classList.add('vibrate');
    setTimeout(removeVibrateClass_address, 210);
} 

function removeVibrateClass_address() {
    address.classList.remove('vibrate');
}

function phone_validate() {
    if(area_code.value == "" || phone_number.value == ""){
        error.style = "display:block; bottom: 39%";
        checkFilled["Phone Number"] = false;
        phone_vibrate();
    }else{
        checkFilled["Phone Number"] = true;
        error.style.display = "none";
        email_page();
    }
}

function phone_vibrate() {
    phone.classList.add('vibrate');
    setTimeout(removeVibrateClass_phone, 210);
} 

function removeVibrateClass_phone() {
    phone.classList.remove('vibrate');
}

function query_validation() {
    if(query.value == ""){
        error.style = "display:block; bottom: 39%";
        checkFilled["Query"] = true;
        query_class_vibrate();
    }else{
        error.style = "display:none";
        checkFilled["Query"] = true;
        if(query.value == "Others"){
            others_selected = true;
            others_page();
        }else{
            others_selected = false;
            radio_others_activated = false;
            feedback_page();
        }
    }
}

function query_class_vibrate() {
    query_class.classList.add('vibrate');
    setTimeout(removeVibrateClass_query_class, 210);
} 

function removeVibrateClass_query_class() {
    query_class.classList.remove('vibrate');
}

function others_validate(){
    if(others_inp.value == ""){
        checkFilled["Others"] = false;
        error.style = "display:block; bottom: 39%";
        others_vibrate();
    }else{
        checkFilled["Others"] = true;
        error.style.display = "none";
        feedback_page();
    }
}

function others_vibrate() {
    others.classList.add('vibrate');
    setTimeout(removeVibrateClass_others, 210);
} 

function removeVibrateClass_others() {
    others.classList.remove('vibrate');
}

function select_others_or_query() {
    if(others_selected){
        others_page();
    }else{
        query_page();
    }
}

function arrow_animate() {
    
    for(let i = 0; i < right_arrow.length; i++){
        right_arrow[i].classList.add('arrow_shake');
    }
    
    setTimeout(removeVibrateClass_arrow, 610);
}

function arrow_animate_previous() {
    
    for(let i = 0; i < left_arrow.length; i++){
        left_arrow[i].classList.add('arrow_shake_prev');
    }
    
    setTimeout(removeVibrateClass_arrow_prev, 610);
}

function removeVibrateClass_arrow() {
    for(let i = 0; i < right_arrow.length; i++){
        right_arrow[i].classList.remove('arrow_shake');
    }
}

function removeVibrateClass_arrow_prev() {
    for(let i = 0; i < left_arrow.length; i++){
        left_arrow[i].classList.remove('arrow_shake_prev');
    }
}

function email_validate() {
    if(email_inp.value=="" || email_check()){
        error.textContent = "This field is required.";
        error.style.display = "none";        
        query_page();
    }else{
        error.textContent = "Incorrect Format";
        error.style = "display:block; bottom: 39%";
        email_vibrate();
    }
}

function email_vibrate() {
    email.classList.add('vibrate');
    setTimeout(removeVibrateClass_email, 210);
} 

function removeVibrateClass_email() {
    email.classList.remove('vibrate');
}

function email_check() {
    let username = "";
    let stop = false;
    if(email_inp.value.indexOf("@") == -1 || email_inp.value.indexOf(".") == -1){
        return false;
    }
    for(let i = 0; i < email_inp.value.length; i++){
        let currChar = email_inp.value[i];
		if(currChar == "@"){
            stop = true;
            let isUserNameValid = checkUserName(username);
            if(!isUserNameValid){
                return false;
            }else{
                return checkDomainName(email_inp.value.substring(i+1));
            }
            break;
		}
		if(!stop){
			username += currChar;
		}
    }
}

function checkUserName(username) {
    console.log(username);
    let valid = false;
    let len = username.length;
    if(username[0] != "." && username[len-1] != "."){
        valid=true;
    }else{
        return valid;
    }
    for(let i = 0; i < username.length-1; i++){
        if((username[i]=="." && username[i+1]==".") || username[i]==" " || username[i+1] == " "){
            return false;
        }
    }
    return valid;
}

function checkDomainName(domainName) {
    console.log(domainName);
    let len = domainName.length;
    if(domainName[0] == "." || domainName[len-1] == "."){
        return false;
    }else{
        return true;
    }
}

function setAttrHelp (){
    for(var i in attrObj){
        radio_others.setAttribute(i, attrObj[i]);
    }
    temp_radio_inline.append(radio_others);
    radio_others_activated = true;
    for(let i = 0; i < radio_inline.length; i++){
        radio_inline[i].classList.add("addOthersRadio");
    }
    radio_feedback.parentElement.parentElement.insertBefore(temp_radio_inline, radio_feedback.parentElement);
} 

function checkFunction() {
    error.style.display = "none";
    var continueToEndPage = true;
    var namesNotComplete = [];
    for(let i in checkFilled){
        if(!checkFilled[i] && i!="Others"){
            continueToEndPage = false;
            namesNotComplete.push(i.toString());
        }
    }

    if(others_selected && !checkFilled["Others"]){
        continueToEndPage = false;
        namesNotComplete.push("Others");
    }

    if(continueToEndPage){
        end_page();
    }else{
        error.textContent = "Fill all * marked fields.";
        error.style = "display:block; bottom: 32%; width: 14%;";
        setTimeout(function() {
                window.alert("Following compulsory fields need to be filled :- "+ namesNotComplete.join(", "));
        },200);
    }

}


// function displayTooltip(event) {
//     var classHovered = event.target.className.toString();
//     var attrTitle = document.createAttribute("title",classHovered);
//     event.target.addAttribute(attrTitle);
//     event.target.addAttribute("data-toggle", "tooltip");
// }