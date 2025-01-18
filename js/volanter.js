



var cart_div = document.querySelector(".carts_products div");
let news = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    news.classList.add("loaded");
});



let head = document.querySelector('#data_head')
let srolling = 0

function scrool() {
    let isScrollBottom = srolling < window.scrollY
    if (isScrollBottom) {
        head.classList.add("hide")
    }
    else {
        head.classList.remove("hide")
    }
    srolling = window.scrollY;
}

window.addEventListener("scroll", function () {
    // if (window.innerWidth <= 985) {
    //     return 0
    // }
    if (window.scrollY >= 50) {
        head.classList.add("active");
        scrool()
    } else {

        head.classList.remove("active")
    }
});
///////////////////////////////////////////////////////////////////////



















let volanteer100 = document.querySelector('.voolanter_bage_sec2');
let input_volanteer = document.querySelector('#input_volanteer');


let volanteers = [

    {
        id2: 1,
        id: 22222,
        image: "./images/volanteer/marim.jpg",
        name: "مريم علاء",
        job: "طالب جامعي",
        universty: " تجاره ",
        age: "21",
        email: "mariemshokry737@gmail.com",
        dipartment: "مدير المتطوعين",
        hobby: "   الرسم",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 2,
        id: 11111,
        image: "./images/volanteer/rokaia.jpg",
        name: "رقيه محمد",
        job: "طالب جامعي",
        universty: "حقوق",
        age: "20",
        email: "roqia7223@gmail.com",
        dipartment: " PR",
        hobby: " القراءه والسفر",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 4,
        id: 55555,
        image: "./images/volanteer/meme.jpg",
        name: "محمد ماجد",
        job: "طالب جامعي",
        universty: "حاسبات",
        age: "20",
        email: "mhmdmajdmhmd98@gmail.com",
        dipartment:"media",
        hobby: " القراءة،  الرياضة",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    
    {
        id2: 3,
        id: 33333,
        image: "./images/volanteer/moataz.jpg",
        name: "معتز يحي",
        job: "طالب جامعي",
        universty: "حقوق",
        age: "20",
        email: "moatazyehia154@gmail.com",
        dipartment: " اجتماعيه",
        hobby: " الشطرنج ,تعلم اللغات,مشاهدة الأفلام و المسلسلات",
        bragraph: "   هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.   ",
    },
    {
        id2: 5,
        id: 66666,
        image: "./images/volanteer/wa3d.jpg",
        name: " وعد الله اشرف",
        job: "طالب جامعي",
        universty: "اقتصاد منزلي",
        age: "19",
        email: "waadashraf202020@gmail.com",
        dipartment: " AC",
        hobby: " الرسم ,الديكور الهاند ميد ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 6,
        id: 77777,
        image: "./images/volanteer/ebrahim.jpg",
        name: "   إبراهيم أحمد",
        job: "طالب جامعي",
        universty: "  علوم الرياضة ",
        age: "21 ",
        email: "brhomahelal@gmail.com",
        dipartment: " HR",
        hobby: " الرسم ,  مشاهده الافلام و المسلسلات  ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },

    {
        id2: 7,
        id: 88888,
        image: "./images/volanteer/ismail.jpg",
        name: "   اسماعيل حسين",
        job: "طالب جامعي",
        universty: " تجاره ",
        age: "21 ",
        email: "Ismailpatrek@gmail.com",
        dipartment: " PR",
        hobby: " كره قدم    ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },

    {
        id2: 8,
        id: 99999,
        image: "./images/volanteer/omar.jpg",
        name: " عمر حمدان ",
        job: "طالب جامعي",
        universty: "  علوم الرياضة",
        age: "20 ",
        email: "omarheman6060@gmail.com",
        dipartment: " HR",
        hobby: "الرسم,مونتاج ,صناعه المحتوي ,الرياضة ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 9,
        id: 21864,
        image: "./images/volanteer/manar atif.jpg",
        name: " منار عاطف ",
        job: "طالب جامعي",
        universty: "  تجاره ",
        age: "21 ",
        email: "manar.a.alwani@gmail.com",
        dipartment: " OC ",
        hobby: "سباحه ، عجل ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 10,
        id: 10105,
        image: "./images/volanteer/mohamed waal.jpeg",
        name: " محمد وائل",
        job: "طالب جامعي",
        universty: "  تكنولوجيا العلوم الصحيه التطبيقيه ",
        age: "20 ",
        email: "midowaell@gnail.com",
        dipartment: " Media",
        hobby: "كره القدم ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 11,
        id: 75714,
        image: "./images/volanteer/ritage.jpg",
        name: "رتاج محمد ",
        job: "طالب جامعي",
        universty: "   خدمه اجتماعيه ",
        age: "19 ",
        email: "rerea9824@gmail.com",
        dipartment: " HR",
        hobby: "الرسم",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 12,
        id: 71681,
        image: "./images/volanteer/noran.jpg",
        name: " نوران محمد",
        job: "طالب جامعي",
        universty: "   خدمه اجتماعيه ",
        age: "19 ",
        email: "noranm717@gmail.com",
        dipartment: " HR",
        hobby: "سباحه",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 13,
        id: 16076,
        image: "./images/volanteer/gamal.jpg",
        name: " جمال محمد",
        job: "طالب جامعي",
        universty: "   خدمه اجتماعيه ",
        age: "19 ",
        email: "gamalmuhamed765@gmail.com",
        dipartment: " HR",
        hobby: "سباحه",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },

    {
        id2: 14,
        id: 39612,
        image: "./images/volanteer/Mariam Mazeed.jpg",
        name: " مريم محمد",
        job: "طالب جامعي",
        universty: "   خدمه اجتماعيه ",
        age: "19 ",
        email: "mmazeed007@gmail.com",
        dipartment: " PR",
        hobby: "Handcraft , swimming, domino ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 15,
        id: 50189,
        image: "./images/volanteer/Ahmad W.jpg",
        name: "أحمد وليد",
        job: "طالب جامعي",
        universty: " فنون جميله",
        age: "19 ",
        email: "ahmed1waleed.18@gmail.com",
        dipartment: " PR",
        hobby: "الرسم ,لعب سكرو  ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 16,
        id: 57394,
        image: "./images/volanteer/7oda tamer74.jpg",
        name: "محمود تامر",
        job: "طالب جامعي",
        universty: " خدمه اجتماعيه",
        age: "21 ",
        email: "7odatamer74@gmail.com",
        dipartment: " VICE HEAD OF AC",
        hobby: "سباحه وكره قدم ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },

    {
        id2: 17,
        id: 91797,
        image: "./images/volanteer/Mariam Abbas.jpg",
        name: "مريم ابو العباس",
        job: "طالب جامعي",
        universty: " فنون جميله ",
        age: "20 ",
        email: "mariamabbas161004@gmail.com",
        dipartment: "Hr",
        hobby: " Graphic Designer + Digital Artist",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 18,
        id: 82473,
        image: "./images/volanteer/Team Games.jpg",
        name: "عبدالله مجدي",
        job: "طالب جامعي",
        universty: " الحقوق ",
        age: "20 ",
        email: "Abdullahmagdisaad@gmail.com ",
        dipartment: "Activities ",
        hobby: " كره القدم ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 19,
        id: 24568,
        image: "./images/volanteer/mariam.jpg",
        name: "مريم خالد",
        job: "طالب جامعي",
        universty: " الخدمه الاجتماعيه ",
        age: "20 ",
        email: "mariamkhaledelseeht@gmail.com ",
        dipartment: "HR ",
        hobby: " القراءه، التعامل مع الناس، الكتابه، ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },

    {
        id2: 20,
        id: 63009,
        image: "./images/volanteer/zina.png",
        name: "زينة محمد",
        job: "طالب جامعي",
        universty: " الخدمه الاجتماعيه ",
        age: "20 ",
        email: "zeina2112005@gmail.com ",
        dipartment: "PR ",
        hobby: " القراءه، الرسم، الكتابه ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 21,
        id: 60658,
        image: "./images/volanteer/Shahd Refaat.jpeg",
        name:"شهد رفعت ",
        job: "طالب جامعي",
        universty: "  سياحه وفنادق ",
        age: "20 ",
        email: "Shahdrefaatrefaat@gmail .com",
        dipartment: "Hr ",
        hobby: " الرسم والقراءة ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 22,
        id: 88585,
        image: "./images/volanteer/Malak Magdy.jpg",
        name:" ملك مجدي  ",
        job: "طالب جامعي",
        universty: " اقتصاد منزلي ",
        age: "19 ",
        email: "malakmagdibadra@gmail.com",
        dipartment: "Pr ",
        hobby: " باسكت رسم زراعه ",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
    {
        id2: 23,
        id: 81234,
        image: "./images/volanteer/farah.jpg",
        name:" فرح محمد ",
        job: "طالب جامعي",
        universty: " خدمة اجتماعية ",
        age: "20 ",
        email: "farahmohamedamin89@gmail.com",
        dipartment: "Oc ",
        hobby: "  تصوير وسفر",
        bragraph: "  هذا الشخص هو أحد المتطوعين المميزين في فريقنا. لديه خبرة واسعة في مجال العمل التطوعي ويتميز بروح التعاون والمساعدة. شارك في العديد من الفعاليات والمبادرات التي تهدف إلى خدمة المجتمع وتحقيق التنمية المستدامة.    ",
    },
]




input_volanteer.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {

        news.classList.add("zip");
        let search = input_volanteer.value;
        console.log(search);
        // volanteer100.style.display = "block"
    
        let volanteer = volanteers.find(volanteer => volanteer.id === parseInt(search));
        if (volanteer) {
            let y = `
                <div class="voolanter_bage_sec_text1 col-10 col-md-5 mx-auto">
                    <div class="d-flex">
                        <div class="half_circle" data-aos="fade-up" data-aos-once="true"></div>
                        <h2 class="important" id="who" data-aos="fade-up" data-aos-once="true">${volanteer.name}</h2>
                    </div>
                    <br><br>
                    <div>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay=50> ${volanteer.bragraph}  </p>
                        <ul>
                            <li  data-aos="fade-up" data-aos-once="true" data-aos-delay=60>العمر: ${volanteer.age} سنة</li>
                            <li  data-aos="fade-up" data-aos-once="true" data-aos-delay=70>المهنة: ${volanteer.job}</li>
                            
                            <li  data-aos="fade-up" data-aos-once="true" data-aos-delay=90> الكليه: ${volanteer.universty}</li>
                            <li  data-aos="fade-up" data-aos-once="true" data-aos-delay=100>الايميل: ${volanteer.email}</li>
                            <li  data-aos="fade-up" data-aos-once="true" data-aos-delay=100>اللجنه: ${volanteer.dipartment}</li>
                            <li  data-aos="fade-up" data-aos-once="true" data-aos-delay=80>الهوايات: ${volanteer.hobby}</li>
                        </ul>
                    </div>
                </div>
                <div class="voolanter_bage_sec_image col-10 col-md-5 mx-auto">
                    <div class="custom_box">
                        <img id="volunteerImage" src="${volanteer.image}" alt=""  data-aos="fade-up" data-aos-once="true" data-aos-delay=0 data-aos-duration="1500">
                    </div>
                </div>
            `;
            volanteer100.innerHTML = y;
            news.classList.remove("zip");
        } else {
            news.classList.remove("zip");
            volanteer100.innerHTML = "<h2>لا يوجد متطوع بهذا الرقم</h2>";

        }
    }
});
