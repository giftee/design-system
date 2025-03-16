#!/bin/bash

echo "Start Building"

rm -rf dist
pnpm node-build

css_files=`find dist/css -type f -name "*.css"`
touch dist/css/index.css
for css_file in ${css_files[@]}
do
  css_filename=`basename ${css_file}`
  echo "@import \"${css_filename}\";" >> dist/css/index.css
done

scss_files=`find dist/scss -type f -name "*.scss"`
touch dist/scss/index.scss
for scss_file in ${scss_files[@]}
do
  scss_filename=`basename ${scss_file}`
  echo "@use \"${scss_filename}\";" >> dist/scss/index.scss
done

cjs_files=`find dist/cjs -type f -name "*.js"`
for cjs_file in ${cjs_files[@]}
do
  cjs_filename=`basename ${cjs_file} .js`
  cjsFilename=$(echo $cjs_filename | 
    awk 'BEGIN{FS="-";OFS="";}{
        for(i=1;i<=NF;i++)
            $i=(i==1 ? tolower(substr($i,1,1)) : toupper(substr($i,1,1))) substr($i,2)
    }1'
  )

  echo "exports[\"${cjsFilename}\"] = require(\"./${cjs_filename}\");" >> dist/cjs/index.js
done

ts_files=`find dist/types -type f -name "*.d.ts"`
for ts_file in ${ts_files[@]}
do
  ts_filename=$(basename "$ts_file" .d.ts)
  tsFilename=$(echo $ts_filename | 
    awk 'BEGIN{FS="-";OFS="";}{
        for(i=1;i<=NF;i++)
            $i=(i==1 ? tolower(substr($i,1,1)) : toupper(substr($i,1,1))) substr($i,2)
    }1'
  )
  TsFilename=$(echo $ts_filename | 
    awk 'BEGIN{FS="-";OFS="";}{
        for(i=1;i<=NF;i++)
            $i=toupper(substr($i,1,1)) substr($i,2)
    }1'
  )
  echo "import type ${TsFilename} from \"./${ts_filename}\";" >> dist/types/index.d.ts
  echo "export declare const ${tsFilename}: typeof ${TsFilename};" >> dist/types/index.d.ts
done
