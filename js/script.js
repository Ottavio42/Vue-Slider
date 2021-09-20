const app = new Vue ({
    el:"#root",
    data: {
        images: [
            "https://www.globochannel.com/wp-content/uploads/2020/09/clipimage-5f5a2e8c4d42e__700.jpg",
            "https://www.keblog.it/wp-content/uploads/2018/12/immagini-cani-divertenti-e-strani-16.jpg",
            "https://www.natifly.com/wp-content/uploads/2017/03/cani-divertenti.jpg"
        ],
        imageIndex: 0
    },
    methods:{
        nextImage: function() {
            this.imageIndex++;
            if(this.imageIndex >= this.images.lenght){
                this.imageIndex= 0;
            }
        },
        prevImage: function() {
            this.imageIndex--;
            if(this.imageIndex == -1){
                this.imageIndex= this.images.lenght -1 ;
            }
        },
        isBulletActive: function(indexBullet) {
            if(this.imageIndex == indexBullet){
                return 'active' ;
            }
            return '';
        },
    },
    mounted: function() {
        
    }
})