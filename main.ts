let zombieCounter = 0
let zombieImgs = [
img`
    ...cccccccccccccc...
    ..c67777777777777c..
    ..c67777777777777c..
    .cc111177777777771c.
    c1111111777f77f7111c
    c111111177fd77df111c
    c111111177ff77ff111c
    .c1111177777777771c.
    ..c67777777dfffd7c..
    ..c67777777d777d7c..
    ..c67777777dd7dd7c..
    ...c677777777777c...
    ..c67777777777777c..
    ..c677cc777777777cc.
    ..c67667c7777777767c
    ..c67667c7777777767c
    ..c677cc777777777cc.
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ...cc677cccc677cc...
    ....ceeec...cce.....
    ....ceeec....c......
    .....ccc.....e......
    `,
img`
    .....44444444444...
    ..444444444444444..
    .44444444444444444.
    4444444744444444444
    4444477777444447444
    444477777c7777c744.
    4447777777f77f7744.
    4411777777f77f77c..
    4411417777777771c..
    4c11114444444141c..
    .c11141114411141c..
    .c11114111411111c..
    ..c677711111414c...
    .c67777771411177c..
    .c677cc777111e77cc.
    .c67667c7effdee767c
    .c67667c7f..d.e767c
    .c677ccdf......ecc.
    .c67777ef.....fec..
    .c67777ef.df.fe7c..
    .c67777eefdfdee7c..
    .c677773eeeeee37c..
    .c6777737e77e377c..
    .c67777777777377c..
    ..cc677cccc677cc...
    ...c677c..c677c....
    ...c677c..c677c....
    ....ccc....ccc.....
    `,
img`
    .......cccccccc....
    ...cccc77777777c...
    ..c4b4477777777c...
    .cbb4bb77777777c...
    .c44bb76ffff6fff...
    .cb4b77ffff7ffff...
    c63d777ffff7ffff...
    c67377777777777c...
    c6737777fff7777c...
    c67777777777777c...
    c67777777777777c...
    .c677777777777c....
    c6777f677777777c...
    c6777cc76777777cc..
    c677667cf67777767c.
    c677667ce77777767c.
    c6777cc7e776777cc..
    c6777777777f677c...
    c6777777777e677c...
    c6777777777ef67c...
    c6777777777ee77c...
    c67777777777e77c...
    c67777777777777c...
    .cc6677cc6677cc....
    ....cd....cd.......
    ....cd....cd.......
    ...c.cd..c.cd......
    ...................
    ...................
    `,
img`
    .........4444..........
    .......4444444...44....
    ...44444444444444444...
    ..4444444444444444444..
    .444444444444444444444.
    4444444444444444444444.
    44444444447444444444444
    44444444777774444474444
    4444444777777777777444.
    .444447777777f7ff7744..
    .44441177777777ff77c...
    4444411417777777771c...
    4444c11114444444141c...
    .444c11141114411141c...
    ..44c11114111411111c...
    .....c677711111414c....
    ....c67777771411177c...
    ....c67777777111777cc..
    ....e6e77777777e77767c.
    .....e.e777eeee.e77e7c.
    ........eee3333d3eecc..
    .............3.........
    ..........d3ddd33......
    .............d.........
    ....ee....eeee.eeeee...
    ....c6eeee7777e7777c...
    ....c67777777777777c...
    .....cc677cccc677cc....
    ......cbddc..cbddc.....
    ......cbddc..cbddc.....
    .......ccc....ccc......
    `,
img`
    ....fffffffff......
    ..ffeeeeeeeeeff....
    .feeeeeeeeeeeeef...
    feeeeeeeeeeeeeef...
    feeeeeeeeeeeeeef...
    feeeeeeeceeeec7c...
    feeeeeeeefcdf77c...
    feeeeeeedfccfd7c...
    feee7777cccccc7c...
    c6777777cccccc7c...
    c6777777dcddcd7c...
    c67777777777777c...
    .c677777777777c....
    cddddddddddddd1c...
    cddddccddddddd1ccc.
    cddd667cddddd21c67c
    cddd667cdddd222c67c
    cddddccdddddd21ccc.
    cddddddddddddd1c...
    cddddddddddddd1c...
    cdded4dddddddd1c...
    cdd2d7dddddddd1c...
    cddddddddbbbdddc...
    cdd2d7dddddddd1c...
    .cdddddccdddd1c....
    ..ccbbc..ccbbc.....
    ..ccbbc..ccbbc.....
    ...ccc....ccc......
    `,
img`
    ...cccccccccccccc....
    ..c67777777777777c...
    ..c67777777777777c...
    .cc1111777cccccc71c..
    c111111177bddfdb111c.
    c111111177b3d3db111c.
    c1111111777bbbb7111c.
    .c1111177777777771c..
    ..c6777777dccc777c...
    ..c6777777cccc777c...
    ..c6777777eeee777c...
    ...c6777777ee777c....
    ..fffffff117e711ff...
    ..ffffccff11e11fffcc.
    ..fff667cf11c11fff67c
    ..fff667cff1c1ffff67c
    ..ffffccfff1f1fddfcc.
    ..ffffffffffffffff...
    ..ffffffffffffffff...
    ..fffffffffdfdffff...
    ..ffffffffffffffff...
    ..ffffffffffffffff...
    ..fffffffffdfdffff...
    ...ffffffffffffff....
    ......bb.....bb......
    ......bd.....bd......
    ......bd.....bd......
    `,
img`
    ...cccccc.......
    ..c444bbbc......
    .c44bbb44bccccc.
    c6b4444bbb77777c
    c6bb4bbb4b77777c
    c63b4b44b377777c
    c673b4b77377777c
    c6733377ff77ff7c
    c67373777f77f77c
    c67377777777777c
    c67777777ccc777c
    c6777777c777c77c
    c67777777777777c
    .c677777777777c.
    eeee88eeeeee882e
    eeee88eeeeee882e
    eeee88eeeeee882e
    cc8888888888888c
    cc8c5588888c5d8c
    cc8c5588888c558c
    cc8888888888888c
    cc8888888888888c
    cc888cccccccc88c
    cc8888cccccc888c
    cc8888888888888c
    .cc888cccc888cc.
    ..ceeec..ceeec..
    ..ceeec..ceeec..
    ...ccc....ccc...
    `,
img`
    ....fffffffff...
    ..ffeeeeeeeeeff.
    .feeeeeeeeeeeeef
    feeeeeeeeeeeeeef
    feeeeeeeeeeeeeef
    feeeeee6ffff6fff
    feeeeeeffffeffff
    feeeeeeffff7ffff
    feee77777777777c
    c67777777ccc777c
    c6777777c777c77c
    c67777777777777c
    .c677777777777c.
    cccc88cccccc88cc
    cccc88cccccc88cc
    cccc88cccccc88cc
    cc8888888888888c
    cc8c5588888c558c
    cc8c5588888c558c
    cc8888888888888c
    cc8888888888888c
    cc8888888888888c
    cc8888888888888c
    cc8888888888888c
    .cc888cccc888cc.
    ..cc88c..cc88c..
    ..cc88c..cc88c..
    ...ccc....ccc...
    `,
img`
    .....44444444444...
    ..444444444444444..
    .44444444444444444.
    4444444744444444444
    4444477777444447444
    444477777c7777c744.
    4447777777f77f7744.
    4447777777f77f77c..
    4447777777777777c..
    4444777777777777c..
    .444777777277777c..
    .447777777777777c..
    ..c677777777777c...
    .c67777777777777c..
    .c677cc7777e7e77c..
    .c67667ce77777ee...
    .c67667c77777ee....
    .c677cc7777e7eede..
    .c6777777e77eee....
    .c677777777eeeee...
    .c6777777777eeede..
    .c6777777e7eee7dc..
    .c6777777777ee77c..
    .c677777777e7e77c..
    ..cc677cccc677cc...
    ...fffcf..fffcf....
    ...fffcf..fffcf....
    ....fff....fff.....
    `,
img`
    ...cccccccccccccc...
    ..c67777777777777c..
    ..c67777777777777c..
    .cc1111777f77777f1c.
    c111111177ff777ff11c
    c11111117775f7f5111c
    c111111177777777111c
    .c1111177777777771c.
    ..c6777777dffffd7c..
    ..c677777dd7777ddc..
    ..c67777777777777c..
    ...c677777777777c...
    ..cddddddddddddd1c..
    ..cddddccddddddd1ccc
    ..cddd667cddddd21c67
    ..cddd667cdddd222c67
    ..cddddccdddddd21ccc
    ..cddddddddddddd1c..
    ..cddddddddddddd1c..
    ..cdded4dddddddd1c..
    ..cdd2d7dddddddd1c..
    ..cddddddddbbbdddc..
    ..cdd2d7dddddddd1c..
    ...cdddddccdddd1c...
    ....ceeec...cce.....
    ....ceeec....c......
    .....ccc.....e......
    `
]
let gunLeft = img`
    . . . . . . . . f f f f f . . .
    . . . . . . f f f f f f f f f .
    . . . . . f f f c f f f f f f .
    . . . . . f f c f f f c f f f f
    . . . f f c c f f f c c f f c f
    . . . f f f f f e f f f f c c f
    . . . . f f f e e f f f f f f f
    . . . . . f f e e f b f e e f f
    . . . . . . f 4 4 f 1 e 4 e f .
    . f f f f f . 4 4 4 4 e f f f .
    . f f f b b e f e e e e e f . .
    . . . f 4 b 4 7 7 7 e 4 4 e . .
    . . . . f f e 7 7 7 e 4 4 e . .
    . . . . . . . 6 6 6 f e e f . .
    . . . . . . . f f f f f f . . .
    . . . . . . . . . f f f . . . .
`
let gunShootLeft = img`
    . . . . . . . . f f f f f . . .
    . . . . . . f f f f f f f f f .
    . . . . . f f f c f f f f f f .
    . . . . . f f c f f f c f f f f
    . . . f f c c f f f c c f f c f
    . . . f f f f f e f f f f c c f
    . . . . f f f e e f f f f f f f
    . . . . . f f e e f b f e e f f
    4 . . . . . f 4 4 f 1 e 4 e f .
    5 f f f f f . 4 4 4 4 e f f f .
    5 f f f b b e f e e e e e f . .
    4 . . f 4 b 4 7 7 7 e 4 4 e . .
    . . . . f f e 7 7 7 e 4 4 e . .
    . . . . . . . 6 6 6 f e e f . .
    . . . . . . . f f f f f f . . .
    . . . . . . . . . f f f . . . .
`

//Finish these

let gunRight = img`
    . . . . . . . . f f f f f . . .
    . . . . . . f f f f f f f f f .
    . . . . . f f f c f f f f f f .
    . . . . . f f c f f f c f f f f
    . . . f f c c f f f c c f f c f
    . . . f f f f f e f f f f c c f
    . . . . f f f e e f f f f f f f
    . . . . . f f e e f b f e e f f
    . . . . . . f 4 4 f 1 e 4 e f .
    . f f f f f . 4 4 4 4 e f f f .
    . f f f b b e f e e e e e f . .
    . . . f 4 b 4 7 7 7 e 4 4 e . .
    . . . . f f e 7 7 7 e 4 4 e . .
    . . . . . . . 6 6 6 f e e f . .
    . . . . . . . f f f f f f . . .
    . . . . . . . . . f f f . . . .
`
let gunShootRight = img`
    . . . . . . . . f f f f f . . .
    . . . . . . f f f f f f f f f .
    . . . . . f f f c f f f f f f .
    . . . . . f f c f f f c f f f f
    . . . f f c c f f f c c f f c f
    . . . f f f f f e f f f f c c f
    . . . . f f f e e f f f f f f f
    . . . . . f f e e f b f e e f f
    4 . . . . . f 4 4 f 1 e 4 e f .
    5 f f f f f . 4 4 4 4 e f f f .
    5 f f f b b e f e e e e e f . .
    4 . . f 4 b 4 7 7 7 e 4 4 e . .
    . . . . f f e 7 7 7 e 4 4 e . .
    . . . . . . . 6 6 6 f e e f . .
    . . . . . . . f f f f f f . . .
    . . . . . . . . . f f f . . . .
`
let mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, 0)
controller.moveSprite(mySprite2)
scene.cameraFollowSprite(mySprite2)
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level_1`)
let waveNumber = 1
function zombieSpawn(zombies: any[]){
    for(let i = 0; i < zombies.length; i++){
        let tempImg = zombies.get(i)
        for (let j = 0; j < waveNumber; j++){
           tiles.placeOnRandomTile( sprites.create(tempImg , SpriteKind.Enemy),  sprites.dungeon.floorMixed)
        }
    }
}
if (zombieCounter == 0) {
    zombieSpawn( zombieImgs )
}

// lava, waves, projectile weapon aka guns, walls, win condition, health bar on player and zombies, make it multiplayer
