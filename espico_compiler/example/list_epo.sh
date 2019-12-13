#!/bin/bash
cat > index.html << EOL
<!DOCTYPE html>
<html>
   <head>
      <title>List of ESPiCo examples</title>
   </head>
   <body>
      <p>ESPiCo examples:</p><br/>
EOL

EPOS=`ls -1 *.epo`

for E in $EPOS; do
  # echo $INF
  # IFS="-" set $INF
  # var1=${INF%.epo-*}
  # var2=${INF#*.epo-}
  echo -n "<a href='https://mali1741.github.io/espico_compiler/index.html?src=https://mali1741.github.io/espico_compiler/example/$E'>" >> index.html
  NFO=`grep -A 1 __nfo__ $E`
  INF=${NFO#*__nfo__}
  echo "$INF</a><br/>" >> index.html
done

cat >> index.html << EOL
   </body>
</html>
EOL

# https://mali1741.github.io/espico_compiler/index.html?src=https://mali1741.github.io/espico_compiler/example/collide.epo
# https://mali1741.github.io/espico_compiler/index.html?src=https://mali1741.github.io/espico_compiler/example/mirror.epo
# https://mali1741.github.io/espico_compiler/index.html?src=https://mali1741.github.io/espico_compiler/example/dankshade.epo
# https://mali1741.github.io/espico_compiler/index.html?src=https://mali1741.github.io/espico_compiler/example/fireball.epo
# https://mali1741.github.io/espico_compiler/index.html?src=https://mali1741.github.io/espico_compiler/example/helloworld.epo
# https://mali1741.github.io/espico_compiler/index.html?src=https://mali1741.github.io/espico_compiler/example/space_tut.epo

