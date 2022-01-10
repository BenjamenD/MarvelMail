var received = document.getElementById("inbox");
var sent = document.getElementById("sent");
var draft = document.getElementById("draft");

if(sent != null || received != null || draft != null){
    emailObj = JSON.parse(jsonEmailData);

    for(var i = 0; i < emailObj.length; i++){
        if(emailObj[i].Draft == "Yes" && draft != null){
            draft.innerHTML += "<div class='row'>" + "<a href='mailto:"+emailObj[i].Email+"?name="+emailObj[i].PersonName+"' class = 'item1'>" + emailObj[i].PersonName + "</a>" + "<div class = 'item2' onclick=alert(JSON.stringify(emailObj["+i+"].EmailText))>" + emailObj[i].Subject + "</div>" + "<div class = 'item3'>" + emailObj[i].DateEmailSentSaved + ", " + emailObj[i].TimeEmailSentSaved + "</div>" + "</div>";
        } else if(emailObj[i].Draft == "No" && sent != null){
            sent.innerHTML += "<div class='row'>" + "<a href='mailto:"+emailObj[i].Email+"?name="+emailObj[i].PersonName+"' class = 'item1'>" + emailObj[i].PersonName + "</a>" + "<div class = 'item2' onclick=alert(JSON.stringify(emailObj["+i+"].EmailText))>" + emailObj[i].Subject + "</div>" + "<div class = 'item3'>" + emailObj[i].DateEmailSentSaved + ", " + emailObj[i].TimeEmailSentSaved + "</div>" + "</div>";
        } else if(emailObj[i].Draft == "Received" && received != null){
            received.innerHTML += "<div class='row'>" + "<a href='mailto:"+emailObj[i].Email+"?name="+emailObj[i].PersonName+"' class = 'item1'>" + emailObj[i].PersonName + "</a>" + "<div class = 'item2' onclick=alert(JSON.stringify(emailObj["+i+"].EmailText))>" + emailObj[i].Subject + "</div>" + "<div class = 'item3'>" + emailObj[i].DateEmailReceived + ", " + emailObj[i].TimeEmailReceived + "</div>" + "</div>";
        }
    }
}

if(document.getElementById("email-submit-btn") != null){
    document.getElementById("email-submit-btn").onclick = function () {
        let emailContent = {
            toName: document.getElementById("to-name").value,
            toEmail: document.getElementById("to-email").value,
            emailSubject: document.getElementById("email-subject").value,
            emailText: document.getElementById("email-text")
        }
        alert(JSON.stringify(emailContent));
    }
}



if(document.getElementById("e-login-btn") != null){
    document.getElementById("e-login-btn").onclick = function () {
        let loginContent = {
            username: document.getElementById("login-email").value,
            pswd: document.getElementById("login-pswd").value
        }

        alert(JSON.stringify(loginContent));
    
        location.replace("inbox.html");
    }
}