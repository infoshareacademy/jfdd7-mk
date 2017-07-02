$(document).ready(function () {
var gra;
gra = function () {
    this.idGry = 0;
    this.idGameTimeout = 0;
    this.naZiemi = true;
    this.opoznienieStartu = 500;
    this.czasGry = 20000;
    this.predkoscPrzewijania = 0.5;
    this.bieg = true;


    this.startGry = function () {
        var x = 0;
        var self = this;

        $('div.cover').removeClass('translucent').addClass('transparent');
        $('div.legend, div.button-start').hide();
        $('.hero, .shadow').show();

        setTimeout(function () {
            self.idGry = setInterval(function () {
                x -= 1;
                var y = Math.abs(x % 598);
                $('.game').css('background-position', x + 'px 0');
                if (self.naZiemi && (y > 400 && y < 460) && self.bieg) {
                    self.bieg = false;
                    self.koniecGry()

                }
            }, self.predkoscPrzewijania);

            self.idGameTimeout = setTimeout(function () {
                self.koniecGry()
            }, self.czasGry);
        }, this.opoznienieStartu);


    };

//
    this.koniecGry = function () {
        clearInterval(this.idGry);
        clearTimeout(this.idGameTimeout);
        this.idGry = 0;
        this.idGameTimeout = 0;
        $("div.cover").removeClass('transparent').addClass('translucent').addClass('cover-final');
        $('button.restart').show();
        if (this.bieg === false) {
            $("div.game-over").slideDown(2000);
        }
        else {
            $("div.success").slideDown(2000);
        }
        $('div.hero, div.shadow, div.jump').hide();
    };

    this.restart = function () {
        var self = this;
        this.naZiemi = true;
        this.bieg = true;
        $('div.cover').removeClass('cover-final');
        $('div.game-over, button.restart, div.success').hide();
        $('div.hero, div.shadow').show();
        self.startGry();
    };

    this.skokGracza = function () {
        var skok = '150px';
        var self = this;
        if (this.naZiemi && this.idGry > 0) {
            this.naZiemi = false;
            $(".hero").hide(0);
            $('.jump').show(0);

            $(".jump").animate({top: '-=' + skok}, 400, function () {
                $(this).animate({top: '+=' + skok}, 400, function () {
                    self.naZiemi = true;
                    $(".hero").show(0);
                    $('.jump').hide(0);
                })
            });
        }
    };


    this.init = function () {
        var self = this;
        $(document).on('click', '.button-start', function () {
            self.startGry();
        });
        $(document).on('click', '.restart', function () {
            self.restart();
        });
        $(document).on('keydown', function (event) {
            if (event.keyCode === 38 || event.keyCode === 32) {
                self.skokGracza();
                event.preventDefault();
            }
        });
        $(document).on('mousedown', function () {
            self.skokGracza();
        })


    };

    this.init();
};
var nowaGra = new gra();


});
