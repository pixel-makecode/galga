sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . 8 2 8 2 8 2 8 . . . . . 
. . . 2 2 8 2 2 2 8 2 2 . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 8 2 8 8 8 2 8 2 2 2 2 . 
. . . 2 2 8 8 8 8 8 2 2 . . . . 
. . . . 2 2 8 8 8 2 2 . . . . . 
. . . . . . 2 2 2 . . . . . . . 
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
let dart: Sprite = null
let bogey: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . a . . . . . . . . . . . . . 
. . a . . . . . . . . . . . . . 
. . a . . 8 8 . . . . . . . . . 
. . a . 8 8 8 8 . . . . . . . . 
. 8 8 8 8 8 8 8 8 8 8 8 . . . . 
8 8 8 4 4 4 4 4 5 5 5 8 8 8 8 8 
8 8 8 4 4 4 4 4 4 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 8 8 8 8 8 8 8 . . . . . . 
. . . 8 8 8 8 8 8 . . . . . . . 
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
8 8 8 8 8 . . . . . . 8 8 8 8 8 
. 8 8 . . . . . . . . . . 8 8 . 
. . 8 . . . . . . . . . . 8 . . 
. . 8 8 . . 8 . . 8 . . 8 8 . . 
. . . 8 8 . 8 . . 8 . 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . . 8 2 8 8 8 8 8 2 8 . . . . 
. . . 8 8 2 8 8 8 2 8 8 . . . . 
. . 8 8 8 8 8 8 8 8 8 8 8 . . . 
. 8 8 8 8 8 2 2 2 8 8 8 8 8 . . 
. 8 8 8 8 2 8 8 8 2 8 8 8 8 . . 
. . 8 8 2 8 8 8 8 8 2 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
