<template>
    <div class="overlay_vehicles" @click="cardMiniVehiclesShow()"></div>
    <h1 class="title_vehicles">{{ titleName }}</h1>
    <div class="wrapperCard">
        <div class="cards_vehicles" v-for="vehicle in vehicles" :key="vehicle" @click="cardMiniVehiclesShow(vehicle.url)" >
            <div class="card_name-vehicles" >
                {{vehicle.name}}
            </div>
            <div class="card_options-vehicles">
                <p>Model: {{ vehicle.model }}</p>
                
            </div>
            <div class="card_space"></div>
                
        </div>
    </div>
    <div class="card_modal-vehicles">
        <div class="vehicles_open">
            <div class="vehicles_open-text">
                <h6>{{vehiclesById.name}}</h6>
                <div class="vehicles_options">                    
                    <p>Model: {{ vehiclesById.model }}</p>
                    <p>Vehicle Class: {{ vehiclesById.vehicle_class }}</p>
                    <p>Manufacturer: {{ vehiclesById.manufacturer }}</p>
                    <p>Cargo Capacity: {{ vehiclesById.cargo_capacity }}</p>
                    <p>Consumables: {{ vehiclesById.consumables }}</p>
                    <p>Cost in credits: {{ vehiclesById.cost_in_credits }}</p>
                    <p>Max atmosphering speed: {{ vehiclesById.max_atmosphering_speed }}</p>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                titleName: 'Vehicles in the STAR WARS'
            }
        },
        mounted(){
            this.$store.dispatch('getVehicles');
        },
        computed:{
            vehicles(){
                return this.$store.getters.getVehicles;
            },
            vehiclesById(){
                
                return this.$store.getters.getVehiclesById;
            }
        },
        methods:{
            cardMiniVehiclesShow(url){
                const overlay = document.querySelector('.overlay_vehicles');
                overlay.classList.toggle('overlayVehiclesOpen');
                const modal = document.querySelector('.vehicles_open');
                modal.classList.toggle('modalVehiclesOpen');
                const body = document.querySelector('body');
                body.classList.toggle('body_stop');
                if (url !== undefined){
                    return this.$store.dispatch('getVehiclesById', url)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .overlay_vehicles{
        position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    display: none;
    z-index: 10;
    }
    .title_vehicles{
        display: flex;
    justify-content: center;
    color: white;
    margin: 20px 0;
    font-size: 30px;
    font-weight: bolder;
    }
    .wrapperCard{
        margin: 50px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: stretch;
    }
    .cards_vehicles{
        color: #999;
    display: flex;    
    flex-direction: column;
    max-width: 300px;
    background: rgb(36, 36, 36);
    font-size: 25px;
    text-align: center;
    width: 30%;
    }
    .cards_vehicles:hover{
    color: #000;
    transition: all .5s ease;
    cursor: pointer;
    img{
        transform: scale(1.1);
        transition: all .5s ease;
    }
    .card_space{
        border-top: 5px solid #000;
        transition: all .5s ease;
    }
}
    .card_name-vehicles{
        padding: 10px 30px 30px 20px;
    font-size: larger;
    }
    .card_options-vehicles{
        flex-grow: 1;
    }
    .card_space{
        width: 30px;
    border-top: 5px solid #999;
    margin: 30px; 
    }
    .card_modal-vehicles{
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .vehicles_open{
        display: flex;
        height: 100%;    
        color: #999;   
        background: rgb(36, 36, 36);
        border-radius: 10px;
        overflow: hidden;
        max-width: 500px;
        max-height:370px;
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 11;
    }
    .vehicles_open-text{
        width: 100%;
        border-left: 2px solid rgb(245, 108, 131);
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        h6{
            font-size: 30px;
            color: #fff;
            margin-bottom: 20px;
            text-align: center;
        }      
    }
    .vehicles_options{
        font-size: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .overlayVehiclesOpen{    
    display: block;
    overflow: hidden;
}
.modalVehiclesOpen{    
    display: flex;
}
</style>