<template>
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
</style>
