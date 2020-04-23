sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    spacePlane.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 f 8 8 8 f 8 8 . . . . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 f 8 f f f 8 f 8 8 8 8 . 
. . . 8 8 f d d d f 8 8 . . . . 
. . . . 8 8 f f f 8 8 . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    spacePlane.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f 3 . . . . . . . . 
. f f f f f f f f f f . . . . . 
. f 8 8 8 8 8 8 8 1 1 f f f f . 
. f 8 8 8 8 8 8 8 f f f f f f f 
. f f f f f f f f f 3 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 8 8 . . . . . . . . . . 8 8 . 
. . 8 . . . . . . . . . . 8 . . 
. . 8 8 . . . . . . . . 8 8 . . 
. . . 8 8 . 8 . . 8 . 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . . f 8 8 8 8 8 f . . . . . 
. . . 8 8 f 8 8 8 f 8 8 . . . . 
. . 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . 8 8 8 8 f f f 8 8 8 8 . . . 
. . 8 8 8 f 8 8 8 f 8 8 8 . . . 
. . . 8 f 8 8 8 8 8 f 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
