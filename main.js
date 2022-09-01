(function () {
    const burgerItem = document.querySelector('.burger');    
    const menu = document.querySelector('.header__navigation');
    const menuCloseItem = document.querySelector('.nav__close');
    const howItWorksItem = document.querySelector('.a__nav_how');
    const planYourTripItem = document.querySelector('.a__nav_plan');
    const destinationsItem = document.querySelector('.a__nav_dest');
    const travelStoriesItem = document.querySelector('.a__nav_travel');
    const socialMediaItem = document.querySelector('.a__nav_social');
    const overlayItem = document.querySelector('.nav__overlay');
    const loginButton = document.querySelector('.button__login');
    const loginPopUp = document.querySelector('.div__login');       
    const accountItem = document.querySelector('.a__nav_account');
    const buttonSignInItem = document.querySelector('.button__sign_in');
    const registerItem = document.querySelector('.register');
    const newRegisterItem = 'Already have an account? <span class="span__register">Log in</span>'
    const newLoginText = 'Create account';
    const loginText = document.querySelector('.h3__login');
    const loginHideItems = document.querySelector('.login__hide');    
    const forgotPasswordText = document.querySelector('.forgot__password');
    const newForgotPasswordText = '';
    const signInText = document.querySelector('.span__sign_in');
    const newSignInText = 'Sign Up';    
    const usaImg = document.querySelector('.div__destination_usa');
    const spainImg = document.querySelector('.div__destination_sp');
    const japanImg = document.querySelector('.div__destination_jap');
    const paginationItem = document.querySelector('.a__pagination_two');
    const arrowLeftItem = document.querySelector('.div__object_left');
    const arrowLRightItem = document.querySelector('.div__object_right');
    const destinationJapItem = document.querySelector('.div__destination_jap');

    
    burgerItem.addEventListener("click", () => {
        menu.classList.add('active');
        overlayItem.classList.add('active');
    });

    menuCloseItem.addEventListener("click", () => {
        menu.classList.remove('active');
        overlayItem.classList.remove('active');
    });

    howItWorksItem.addEventListener("click", () => {
        menu.classList.remove('active');
        overlayItem.classList.remove('active');
    });

    planYourTripItem.addEventListener("click", () => {
        menu.classList.remove('active');
        overlayItem.classList.remove('active');
    });

    destinationsItem.addEventListener("click", () => {
        menu.classList.remove('active');
        overlayItem.classList.remove('active');
    });

    travelStoriesItem.addEventListener("click", () => {
        menu.classList.remove('active');
        overlayItem.classList.remove('active');
    });

    socialMediaItem.addEventListener("click", () => {
        menu.classList.remove('active');
        overlayItem.classList.remove('active');
    });

    overlayItem.addEventListener("click", () => {
        menu.classList.remove('active');
        overlayItem.classList.remove('active');
        loginPopUp.classList.remove('active');
    });

    loginButton.addEventListener("click", () => {
        loginPopUp.classList.add('active');
        overlayItem.classList.add('active');
    });

    accountItem.addEventListener("click", () => {
        menu.classList.remove('active');
        loginPopUp.classList.add('active');
        overlayItem.classList.add('active');
    });

    buttonSignInItem.addEventListener('click', () => {
        alert('E-mail: ' + document.querySelector('.input__email').value + '\nPassword: ' + document.querySelector('.input__password').value);
    });

    registerItem.addEventListener("click", () => {
        loginText.innerHTML = newLoginText;
        registerItem.innerHTML = newRegisterItem;
        loginHideItems.style.display = "none";
        forgotPasswordText.innerHTML = newForgotPasswordText;
        loginPopUp.style.height = '436px';
        loginPopUp.style.top = '113px';
        loginPopUp.style.transition = 'none';        
        signInText.innerHTML = newSignInText;
        const value = 391;
        if (document.body.clientWidth < 391) {
            loginPopUp.style.height = '240px';
            loginPopUp.style.top = '0px';            
        }
        
    });    

    usaImg.addEventListener("click", () => {
        if (document.body.clientWidth > 390) {
            usaImg.style.transform = ('translate(-857px, 0px)');
            usaImg.style.transition = ('2s all linear');
            japanImg.style.transform = ('translate(-857px, 0px)');
            japanImg.style.transition = ('2s all linear');
            spainImg.style.transform = ('translate(-857px, 0px)');
            spainImg.style.transition = ('2s all linear');
            paginationItem.style.order = ('1');
        };    
        
    });

    spainImg.addEventListener("click", () => {
        if (document.body.clientWidth > 390) {
            usaImg.style.transform = ('translate(857px, 0px)');
            usaImg.style.transition = ('2s all linear');
            japanImg.style.transform = ('translate(857px, 0px)');
            japanImg.style.transition = ('2s all linear');
            spainImg.style.transform = ('translate(857px, 0px)');
            spainImg.style.transition = ('2s all linear');
            paginationItem.style.order = ('-1');
        };    
        
    });
    
    japanImg.addEventListener("click", () => {        
        if (document.body.clientWidth > 390) {
            usaImg.style.transform = ('translate(0px, 0px)');
            usaImg.style.transition = ('2s all linear');
            japanImg.style.transform = ('translate(0px, 0px)');
            japanImg.style.transition = ('2s all linear');
            spainImg.style.transform = ('translate(0px, 0px)');
            spainImg.style.transition = ('2s all linear');
            paginationItem.style.order = ('0');          
        };
    });


    
    arrowLRightItem.addEventListener("click", () => {        
        if (document.body.clientWidth <= 390) {            
            if ((paginationItem.style.order === ('')) || (paginationItem.style.order === ('-1'))) {
            destinationJapItem.style.order = ('0');
            paginationItem.style.order = ('0');
            
            } else if (paginationItem.style.order === ('0')) {
                destinationJapItem.style.order = ('1');
                paginationItem.style.order = ('1');
                arrowLRightItem.style.opacity = ('0.5');
            };
        };    
    }); 

    arrowLeftItem.addEventListener("click", () => {            
        if (document.body.clientWidth <= 390) {            
            if (paginationItem.style.order === ('0')) {
            destinationJapItem.style.order = ('-1');
            paginationItem.style.order = ('-1');
            arrowLRightItem.style.opacity = ('1');
            } else if (paginationItem.style.order === ('1')) {
                destinationJapItem.style.order = ('0');
                paginationItem.style.order = ('0');
                arrowLeftItem.style.opacity = ('1');
                arrowLRightItem.style.opacity = ('1');
            };
        };    
    }); 



} () );
