
    const app = new Vue({
        el: "#root",
        data: {
            images: [
                {
                    src: "https://www.globochannel.com/wp-content/uploads/2020/09/clipimage-5f5a2e8c4d42e__700.jpg",
                },
                {
                    "https://www.keblog.it/wp-content/uploads/2018/12/immagini-cani-divertenti-e-strani-16.jpg",
                },
                {
                    "https://www.natifly.com/wp-content/uploads/2017/03/cani-divertenti.jpg"
                }
                
            ],
            imageIndex: 0,
            autoplayID: null
        },
        methods: {
            nextImage: function() {
                this.imageIndex++;
    
                if ( this.imageIndex >= this.images.length ) {
                    this.imageIndex = 0;
                }
            },
            prevImage: function() {
                this.imageIndex--;
    
                if ( this.imageIndex == -1 ) {
                    this.imageIndex = this.images.length - 1;
                }
            },
            isBulletActive: function(indexBullet) {
                if ( this.imageIndex == indexBullet ) {
                    return 'far';
                }
                return 'fas';
            },
            startAutoplay: function() {
                this.autoplayID = setInterval(this.nextImage, 2000);
            },
            stopAutoplay: function() {
                if(this.autoplayID != null) {
                    clearInterval(this.autoplayID);
                }
            }
        },
        mounted: function() {
            this.startAutoplay();
            // navigazion da tastiera
            document.addEventListener("keydown", 
                (event) => {
                    if(event.key == "ArrowRight") {
                        this.nextImage();
                    } else if (event.key == "ArrowLeft") {
                        this.prevImage();
                    }
                }
            );
        }
    });