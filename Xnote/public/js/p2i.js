var page2images = function() {
	var self = this;
	self.Timer;
	self.IntTimer;
	self.refreshImage = 3; //reload images every 2s
	self.timeout = 135; //timeout 135s
	self.devicePicture = false; //device picutre
	self.target = null; //image dom
	self.target_src = null; //imgge url
	self.error_src = "https://api.page2images.com/images/api_error_none.png"; //error url
	//thumbnail
	self.thumbnail = function(target, devicePicture, timeout) {
        setTimeout(function(){
            if (target) {
			self.target = document.getElementById(target);
            } else {
                return;
            }
            if (devicePicture)
                self.devicePicture = devicePicture;
            if (timeout)
                self.timeout = timeout;

            self.target_src = self.target.src;

            var img = new Image();
            img.src = self.target_src;
            img.onload = img.onabort = img.onerror = function() {
                //loading picture, do nothing

                if (img.height == 0 || (img.height == 160 && img.width == 160)) {
                        //set timeout
                        self.Timer = setTimeout(function() {
                            clearTimer(0)
                        }, self.timeout * 1000);
                        //load image to check
                        self.IntTimer = setInterval(function() {
                            loadImage();
                        }, self.refreshImage * 1000);
                }
            }
            },300);
		return;
	}
	//load image
	function loadImage() {

		var tmp = self.target_src + "&p2i_math=" + Math.random();
		var img = new Image();
		img.src = tmp;
		img.onload = img.onabort = img.onerror = function() {
            //loading picture, do nothing
			if (img.height == 0 || (img.height == 160 && img.width == 160)) {

			} else {
                if (self.IntTimer) {
				    self.target.src=tmp;
			    }
				//not load image agagin
				clearTimer(1);
			}
		}
	}
	//clear time and not load image agagin
	function clearTimer(flag) {
		if (self.IntTimer) {
			clearInterval(self.IntTimer);
		}
		if (self.Timer) {
			clearTimeout(self.Timer);
		}
		if (flag == 0) {
			//get error image
			self.target.src=self.error_src;
		}

	}

	return;
}