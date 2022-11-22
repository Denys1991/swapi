<template>
    <!--Card for Species-->
    <div class="wrapperCard">        
        <div class="swcard">
            <div class="card_image">
                <img src="../assets/img/1.jpg" alt="  Andor | “Episode 9: Nobody's Listening!” Episode Guide ">
            </div>
            <div class="card_space"></div>
            <div class="card_name">
                Andor | “Episode 9: Nobody's Listening!” Episode Guide  
            </div>
        </div>
        <div class="swcard">
            <div class="card_image">
                <img src="../assets/img/2.jpg" alt="Andor | “Episode 8: Narkina 5” Episode Guide">
            </div>
            <div class="card_space"></div>
            <div class="card_name">
                Andor | “Episode 8: Narkina 5” Episode Guide 
            </div>
        </div>
    </div> 
    <!--Character Card-->   
    <div class="wrapperCard">
        <div class="character">
            <div class="character_img">
                <img src="../assets/img/dedra_meero.jpg" alt="Dedra Meero">
            </div>
            <div class="character_text">
                <h6>DEDRA MEERO</h6>
                <p>Methodical, polished, and ambitious, Dedra Meero embodies the ideals of the Imperial Security Bureau. She is ever vigilant, collecting and analyzing intelligence from across the galaxy to identify possible signs of disorder. Her ingenuity serves her well, climbing the ranks by piecing together a clear picture of rebel activity from disparate parts.</p>
            </div>
        </div>
        <div class="character">
            <div class="character_img">
                <img src="../assets/img/quadpaw.jpg" alt="Doctor Quadpaw">
            </div>
            <div class="character_text">
                <h6>DOCTOR QUADPAW</h6>
                <p>In a dimly lit operating theater on the world of Frezno, the surgeon known only as Doctor Quadpaw tends to desperate patients with nowhere else to turn. With the help of cybernetic enhancements to sharpen his sight and hearing, and four dexterous organic arms, the skilled physician works swiftly to help those in need -- provided they have the credits to pay.</p>
            </div>
        </div>
        <div class="character">
            <div class="character_img">
                <img src="../assets/img/dedra_meero.jpg" alt="Dedra Meero">
            </div>
            <div class="character_text">
                <h6>DEDRA MEERO</h6>
                <p>Methodical, polished, and ambitious, Dedra Meero embodies the ideals of the Imperial Security Bureau. She is ever vigilant, collecting and analyzing intelligence from across the galaxy to identify possible signs of disorder. Her ingenuity serves her well, climbing the ranks by piecing together a clear picture of rebel activity from disparate parts.</p>
            </div>
        </div>
        <div class="character">
            <div class="character_img">
                <img src="../assets/img/quadpaw.jpg" alt="Doctor Quadpaw">
            </div>
            <div class="character_text">
                <h6>DOCTOR QUADPAW</h6>
                <p>In a dimly lit operating theater on the world of Frezno, the surgeon known only as Doctor Quadpaw tends to desperate patients with nowhere else to turn. With the help of cybernetic enhancements to sharpen his sight and hearing, and four dexterous organic arms, the skilled physician works swiftly to help those in need -- provided they have the credits to pay.</p>
            </div>
        </div>
    </div>
    <!--Open Character Card-->
    <div class="wrapperCard cardOpen">
        <div class="characterOpen">
            <div class="characterOpen_img character_img">
                <img src="../assets/img/quadpaw.jpg" alt="Doctor Quadpaw">
            </div>
            <div class="characterOpen_text">
                <h6>DOCTOR QUADPAW</h6>
                <p>In a dimly lit operating theater on the world of Frezno, the surgeon known only as Doctor Quadpaw tends to desperate patients with nowhere else to turn. With the help of cybernetic enhancements to sharpen his sight and hearing, and four dexterous organic arms, the skilled physician works swiftly to help those in need -- provided they have the credits to pay.</p>
            </div>
        </div>
        <div class="characterOpen">
            <div class="characterOpen_img character_img">
                <img src="../assets/img/dedra_meero.jpg" alt="Dedra Meero">
            </div>
            <div class="characterOpen_text">
                <h6>DEDRA MEERO</h6>
                <p>Methodical, polished, and ambitious, Dedra Meero embodies the ideals of the Imperial Security Bureau. She is ever vigilant, collecting and analyzing intelligence from across the galaxy to identify possible signs of disorder. Her ingenuity serves her well, climbing the ranks by piecing together a clear picture of rebel activity from disparate parts.</p>
            </div>
        </div>
    </div>
    <!--Film Card-->
    <div class="wrapperCard cardOpen">
        <div class="filmCard">
            <div class="filmCard_text">
                <h6>STAR WARS: THE RISE OF SKYWALKER</h6>
                <p>A powerful enemy returns and Rey must face her destiny.</p>
            </div>
            <div class="filmCard_img">
                <img src="../assets/img/sw_rise_skywalker.jpg" alt="Poster Rise Skywalker">
            </div>
        </div>
        <div class="filmCard">
            <div class="filmCard_text">
                <h6>STAR WARS: THE FORCE AWAKENS</h6>
                <p>Thirty years after the Battle of Endor, a new threat has risen in the form of the First Order and the villainous Kylo Ren. Meanwhile, Rey, a young scavenger, discovers powers that will change her life -- and possibly save the galaxy.</p>
            </div>
            <div class="filmCard_img">
                <img src="../assets/img/sw_force_awakens.jpg" alt="Poster Force Awakens">
            </div>
        </div>
    </div>

</template>




<style lang="scss" scoped>
//_____________________________________________________________________swcard
.wrapperCard{
    max-width: 1200px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
}
.swcard{
    color: #999;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background: rgb(36, 36, 36);
    font-size: 25px;
    text-align: center;
    position: relative;
    border-radius: 10px;
}  
.swcard:hover{
    color: #fff;
    transition: all .5s ease;
    cursor: pointer;
    img{
        transform: scale(1.1);
        transition: all .5s ease;
    }
    .card_space{
        border-top: 5px solid #fff;
        transition: all .5s ease;
    }
    .card_space::after{
        border: 1px solid #fff;    
        background-color: #fff;
        transition: all .5s ease;
    }
}
.card_image{
    overflow: hidden;
    border-radius: 10px 10px 0 0 ;
}
.card_space{
    width: 30px;
    border-top: 5px solid #999;
    margin: 30px;
    
}
.card_space::after{
    content: ' ';
    width: 5px;
    height: 5px;
    position: absolute;
    bottom: 130px;
    left: 70px;
    border: 1px solid #999;
    border-radius: 50%;
    background-color: #999;
}
.card_name{
    padding: 10px 30px 30px 20px;
}
//__________________________________________________________________characterCard
.character{
    max-width: 270px;
    border-radius: 10px;
    background: rgb(36, 36, 36);
    color: #999;
}
.character:hover{
    color: #fff;
    transition: all .5s ease;
    cursor: pointer;
    img{
        transform: scale(1.1);
        transition: all .5s ease;
    }
    h6{
        color: rgb(245, 108, 131);
        transition: all .5s ease;
    }
}
.character_img{
    overflow: hidden;
    border-radius: 10px 10px 0 0;    
}
.character_text{
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    border-top: 2px solid rgb(245, 108, 131);
    h6{
        color: #fff;
        font-weight: 700;
        font-size: 23px;        
    }
    
}//_________________________________________________________________characterOpen
.characterOpen{
    display: flex; 
    color: #999;   
    background: rgb(36, 36, 36);
    border-radius: 10px;
    overflow: hidden;
}
.characterOpen_img{
    max-height: 450px;
    width: 60%; 
}
.characterOpen_text{
    width: 40%;
    border-left: 2px solid rgb(245, 108, 131);
    padding: 30px;
    h6{
        font-size: 30px;
        color: #fff;
        margin-bottom: 20px;
    }    
}
.cardOpen{
    flex-direction: column;
    gap: 30px;
}
//________________________________________________________________filmCard
.filmCard{
    display: flex;
    color: #999;   
    background: rgb(36, 36, 36);
    justify-content: space-between;
    border-radius: 10px;  
    overflow: hidden;  
}
.filmCard:hover{
    transition: all .5s ease;
    color: #fff;
    cursor: pointer;
    h6{
        transition: all .5s ease;
        color: rgb(248, 220, 64);
    }
    img{
        transform: scale(1.1);
        transition: all .5s ease;
    }
}
.filmCard_img{
    overflow: hidden;
}
.filmCard_text{
    width: 53%;
    padding: 30px;
    border-right: 2px solid rgb(248, 220, 64);
    h6{
        font-size: 30px;
        color: #fff;
        margin-bottom: 20px;
    }
}
</style>
