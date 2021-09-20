const app = new Vue({
	el: "#root",
	data: {
		images: [
			{
				src: "https://www.natifly.com/wp-content/uploads/2017/03/cani-divertenti.jpg",
				title: "Canetto1"
			},
			{
				src: "https://t1.ea.ltmcdn.com/it/images/6/5/5/10_curiosita_divertenti_sui_cani_556_600.jpg",
				title: "Canetto2"
			},
			{
				src: "https://i.pinimg.com/736x/4b/b9/90/4bb990e7fb21fd8dd002aadd4490ce29.jpg",
				title: "Canetto3"
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