const FONT_WIDTH = 3;
const FONT_HEIGHT = 6;

var font = [
        // New small Font 3x6
        0x00, 0x00, 0x00,     //  (Space)
        0x00, 0x17, 0x00,     //  !
        0x03, 0x00, 0x03,     //  "
        0x1F, 0x0A, 0x1F,     //  #
        0x0B, 0x1F, 0x0D,     //  $
        0x19, 0x04, 0x13,     //  %
        0x1A, 0x15, 0x2A,     //  &
        0x00, 0x03, 0x00,     //  '
        0x0E, 0x11, 0x00,     //  (
        0x00, 0x11, 0x0E,     //  )
        0x0A, 0x04, 0x0A,     //  *
        0x04, 0x0E, 0x04,     //  +
        0x20, 0x10, 0x00,     //  ,
        0x04, 0x04, 0x04,     //  -
        0x00, 0x10, 0x00,     //  .
        0x18, 0x04, 0x03,     //  /
        0x1F, 0x11, 0x1F,     //  0
        0x11, 0x1F, 0x10,     //  1
        0x1D, 0x15, 0x17,     //  2
        0x11, 0x15, 0x1F,     //  3
        0x07, 0x04, 0x1F,     //  4
        0x17, 0x15, 0x1D,     //  5
        0x1F, 0x15, 0x1D,     //  6
        0x01, 0x01, 0x1F,     //  7
        0x1F, 0x15, 0x1F,     //  8
        0x07, 0x05, 0x1F,     //  9
        0x00, 0x12, 0x00,     //  :
        0x00, 0x32, 0x00,     //  ;
        0x04, 0x0A, 0x11,     //  <
        0x0A, 0x0A, 0x0A,     //  =
        0x11, 0x0A, 0x04,     //  >
        0x01, 0x15, 0x07,     //  ?
        0x0E, 0x11, 0x17,     //  @
        0x1F, 0x05, 0x1F,     //  A
        0x1F, 0x15, 0x1B,     //  B
        0x1F, 0x11, 0x11,     //  C
        0x1F, 0x11, 0x0E,     //  D
        0x1F, 0x15, 0x11,     //  E
        0x1F, 0x05, 0x01,     //  F
        0x1F, 0x11, 0x19,     //  G
        0x1F, 0x04, 0x1F,     //  H
        0x11, 0x1F, 0x11,     //  I
        0x11, 0x11, 0x0F,     //  J
        0x1F, 0x04, 0x1B,     //  K
        0x1F, 0x10, 0x10,     //  L
        0x1F, 0x02, 0x1F,     //  M
        0x1F, 0x01, 0x1F,     //  N
        0x1F, 0x11, 0x1F,     //  O
        0x1F, 0x05, 0x07,     //  P
        0x1F, 0x19, 0x1F,     //  Q
        0x1F, 0x05, 0x1B,     //  R
        0x17, 0x15, 0x1D,     //  S
        0x01, 0x1F, 0x01,     //  T
        0x1F, 0x10, 0x1F,     //  U
        0x0F, 0x10, 0x0F,     //  V
        0x1F, 0x08, 0x1F,     //  W
        0x1B, 0x04, 0x1B,     //  X
        0x03, 0x1C, 0x03,     //  Y
        0x19, 0x15, 0x13,     //  Z
        0x1F, 0x11, 0x00,     //  [
        0x03, 0x04, 0x18,     //  \
        0x00, 0x11, 0x1F,     //  ]
        0x02, 0x01, 0x02,     //  ^
        0x10, 0x10, 0x10,     //  _
        0x01, 0x02, 0x00,     //  `
        0x18, 0x14, 0x1C,     //  a
        0x1F, 0x14, 0x1C,     //  b
        0x1C, 0x14, 0x14,     //  c
        0x1C, 0x14, 0x1F,     //  d
        0x08, 0x1C, 0x14,     //  e
        0x04, 0x1F, 0x05,     //  f
        0x2C, 0x2C, 0x3C,     //  g
        0x1F, 0x04, 0x1C,     //  h
        0x14, 0x1D, 0x10,     //  i
        0x20, 0x1D, 0x00,     //  j
        0x1F, 0x08, 0x14,     //  k
        0x01, 0x1F, 0x10,     //  l
        0x1C, 0x08, 0x1C,     //  m
        0x1C, 0x04, 0x1C,     //  n
        0x1C, 0x14, 0x1C,     //  o
        0x3C, 0x14, 0x1C,     //  p
        0x1C, 0x14, 0x3C,     //  q
        0x1C, 0x04, 0x04,     //  r
        0x10, 0x1C, 0x04,     //  s
        0x0F, 0x14, 0x14,     //  t
        0x1C, 0x10, 0x1C,     //  u
        0x0C, 0x10, 0x0C,     //  v
        0x1C, 0x18, 0x1C,     //  w
        0x14, 0x08, 0x14,     //  x
        0x2C, 0x28, 0x3C,     //  y
        0x04, 0x1C, 0x10,     //  z
        0x04, 0x1F, 0x11,     //  {
        0x00, 0x1F, 0x00,     //  |
        0x11, 0x1F, 0x04,     //  }
        0x02, 0x06, 0x04,     //  ~
        0x1C, 0x12, 0x1C,     //  SEL
        0x1F, 0x1F, 0x1F,     //  FULL
        0x15, 0x0A, 0x15,     //  PATT
        0x0F, 0x1A, 0x0F,     //  CAT
        0x0C, 0x1C, 0x0C,     //  DOWN
        0x15, 0x00, 0x0A,     //  SPAR
        0x0E, 0x0C, 0x1C,     //  WHIR
        0x1C, 0x1C, 0x18,     //  BALL
        0x0C, 0x18, 0x0C,     //  HRT
        0x04, 0x0A, 0x04,     //  EYE
        0x1A, 0x0F, 0x1A,     //  MAN
        0x1C, 0x16, 0x1D,     //  HOUS
        0x04, 0x0E, 0x0E,     //  LEFT
        0x0A, 0x08, 0x0A,     //  SMIL
        0x18, 0x1F, 0x01,     //  NOTE
        0x0E, 0x0A, 0x0E,     //  BTNO
        0x04, 0x0E, 0x04,     //  DIAM
        0x04, 0x00, 0x04,     //  LINE
        0x0E, 0x0E, 0x04,     //  RGHT
        0x15, 0x0E, 0x15,     //  STAR
        0x1B, 0x1F, 0x1B,     //  HOUR
        0x06, 0x07, 0x06,     //  UP
        0x04, 0x08, 0x04,     //  FLY
        0x02, 0x04, 0x08,     //  ZIG
        0x0A, 0x04, 0x0A,     //  BTNX
        0x15, 0x15, 0x15,     //  HORI
        0x1F, 0x00, 0x1F      //  VERT
];
