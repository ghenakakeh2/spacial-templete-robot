// testing option
let toglleMenu = document.querySelector('.toogle-menu');
let ultoglle = document.querySelector('.linkes-continer .linkes');


toglleMenu.onclick = (e) => {
    e.stopPropagation();
    ultoglle.classList.toggle('ul-toglle');

    toglleMenu.classList.toggle('menu-active')
}
ultoglle.onclick = (e) => {
    e.stopPropagation();
}
document.onclick = (e) => {
    if (!e.target.classList.contains("toogle-menu") && !e.target.classList.contains("linkes")) {
        if (ultoglle.classList.contains("ul-toglle")) {
            ultoglle.classList.toggle('ul-toglle');

            toglleMenu.classList.toggle('menu-active')
        }
    }

}

//cheack if there is a main color on local storage
if (localStorage.getItem("color")) {
    let localcolor = localStorage.getItem("color")
    document.documentElement.style.setProperty("--main-color", localcolor)
    document.querySelectorAll(".colors-list li").forEach((ele) => {
        ele.classList.remove("active");
        if (ele.dataset.color === localcolor) {
            ele.classList.add("active");
        }
    })

}
else {
    document.documentElement.style.setProperty("--main-color", "#00bcd4ad")

}



//select setting box element
let iconSetting = document.querySelector('.setting-icon ');
let settingBox = document.querySelector('.setting-box');
iconSetting.addEventListener('click', () => {
    iconSetting.classList.toggle("fa-spin")
    settingBox.classList.toggle("open")
})

//switch color
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        localStorage.setItem("color", e.target.dataset.color);
        // e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
        //     ele.classList.remove("active")
        // })
        // e.target.classList.add("active");
        active(e);

    })
})





let backgroundoption = true;
let backgroundinterval;
//cheack if there is a random background item

if (localStorage.getItem("randomBackgound")) {
    let localRandomBackground = localStorage.getItem("randomBackgound")
    if (localRandomBackground === 'true') {
        backgroundoption = true;
    }
    else {
        backgroundoption = false;
    }

    document.querySelectorAll(".Random span").forEach((ele) => {
        ele.classList.remove("active");
        if (localRandomBackground === 'true') {
            document.querySelector('.Random .yes').classList.add("active")
        }
        else {
            document.querySelector('.Random .no').classList.add("active")

        }
    })

}
else {
    document.documentElement.style.setProperty("--main-color", "#00bcd4ad")

}
//switch random backgrund 
const randombackgroundel = document.querySelectorAll(".Random span");
randombackgroundel.forEach((span) => {
    span.addEventListener("click", (e) => {


        // e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
        //     ele.classList.remove("active")
        // })
        // e.target.classList.add("active");
        active(e);
        if (e.target.dataset.background === "yes") {
            backgroundoption = true;
            randombackground();
            localStorage.setItem("randomBackgound", true);

        }
        else {
            backgroundoption = false;
            clearInterval(backgroundinterval);
            localStorage.setItem("randomBackgound", false);


        }



    })
})



//select landing page element
let landingPage = document.querySelector('.landing-page');
let imgesArry = ['04.jpg', "03.jpg", "02.jpg", "01.jpg"];


function randombackground() {
    if (backgroundoption == true) {
        backgroundinterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgesArry.length);
            landingPage.style.backgroundImage = "url('/" + imgesArry[randomNumber] + "')"

        }, 2000);
    }


}




//rest  option
let restbtn = document.querySelector(' .rest-option');
restbtn.onclick = () => {
    localStorage.clear();
    location.reload()
}



//select skilles varibes
let ourSkills = document.querySelector('.our-skills');

window.onscroll = () => {
    let skillOffestTop = ourSkills.offsetTop;
    let skillOuterHight = ourSkills.offsetHeight;
    let windowHight = window.innerHeight;
    let windowscroltop = window.pageYOffset;
    if (windowscroltop > (skillOffestTop + skillOuterHight - windowHight)) {
        let allSkills = document.querySelectorAll('.our-skills .skills-box .skill-progersss span')
        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.progress;

        })
    }
}



//select imge gallary vairbels

let imgsGallary = document.querySelectorAll('.ourGallery .img-box img');

imgsGallary.forEach((img) => {
    img.addEventListener("click", () => {
        let overlay = document.createElement("div");
        overlay.className = "overlaydiv";
        document.body.appendChild(overlay);

        let puopbox = document.createElement("div");
        puopbox.className = "divpoup";
        if (img.alt !== null) {
            let imgHeading = document.createElement("h2");
            let imgText = document.createTextNode(img.alt);
            imgHeading.appendChild(imgText);
            puopbox.appendChild(imgHeading)
        }
        let imgPoup = document.createElement("img");
        imgPoup.src = img.src;
        puopbox.appendChild(imgPoup);
        document.body.appendChild(puopbox)

        let closeButten = document.createElement("span");
        let closetext = document.createTextNode("X");
        closeButten.className = "closeBuuten"
        closeButten.appendChild(closetext)
        puopbox.appendChild(closeButten)







    })
})


document.addEventListener("click", (e) => {
    if (e.target.className == "closeBuuten") {
        e.target.parentElement.remove();
        document.querySelector(".overlaydiv").remove()
    }
})



// testing option

let BilletsSpan = document.querySelectorAll('.option-box .testing-option span');

let BulletsItem = localStorage.getItem("Bullets_Option");
let navBullets = document.querySelector('.nav-bullets');
let allSection = document.querySelectorAll('.section')
allSection.forEach((section) => {
    let buellets = document.createElement('div');
    buellets.className = 'buellets';
    buellets.dataset.section = "." + section.dataset.section;
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    let nameSection = document.createTextNode(section.dataset.section);
    tooltip.appendChild(nameSection);
    buellets.appendChild(tooltip);
    navBullets.appendChild(buellets);
})


document.addEventListener("click", (e) => {
    if (e.target.className == "buellets") {
        document.querySelector(e.target.dataset.section).scrollIntoView(
            {
                behavior: 'smooth'
            }
        );
    }
})
if (BulletsItem !== null) {
    BilletsSpan.forEach((span) => {
        span.classList.remove("active")
    })
    if (BulletsItem === "block") {
        navBullets.style.display = "block";
        BilletsSpan[0].classList.add("active")


    } else {
        navBullets.style.display = "none"
        BilletsSpan[1].classList.add("active")

    }
}



BilletsSpan.forEach((span) => {
    span.addEventListener("click", (e) => {
        if (span.dataset.disply === "yes") {
            navBullets.style.display = "block";
            localStorage.setItem("Bullets_Option", "block")

        }
        else {
            navBullets.style.display = "none"
            localStorage.setItem("Bullets_Option", "none")

        }
        active(e)
    })
})

function active(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
        ele.classList.remove("active")
    })
    ev.target.classList.add("active");
}