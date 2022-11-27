<template>
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
</template>
<style lang="scss" scoped>
//________________________________________________________________filmCard
.filmCard{
    display: flex;
    color: #999;   
    background: rgb(36, 36, 36);
    justify-content: space-between;
    border-radius: 10px;  
    overflow: hidden;  
    max-width: 1200px;
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