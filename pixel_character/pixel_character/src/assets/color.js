const color = [
    { color: "#FFFFFF" },
    // { color: "#FFF2F2" },
    { color: "#FFE8E8" },
    { color: "#FFDEDE" },
    { color: "#FFD4D4" },
    { color: "#FFC9C9" },
    { color: "#FFBFBF" },
    { color: "#FFB5B5" },
    { color: "#FFABAB" },
    { color: "#FFA1A1" },
    { color: "#FF9696" },
    { color: "#FF8C8C" },
    { color: "#FF8282" },
    { color: "#FF7878" },
    { color: "#FF6E6E" },
    { color: "#FF6363" },
    { color: "#FF5959" },
    { color: "#FF5F5F" },
    { color: "#FF4545" },
    { color: "#FF3B3B" },
    { color: "#FF3030" },
    { color: "#FF2626" },
    { color: "#FF1C1C" },
    { color: "#FF1212" },
    { color: "#FF0000" },
    { color: "#F50000" },
    { color: "#F00000" },
    { color: "#EB0000" },
    { color: "#E60000" },
    { color: "#E00000" },
    { color: "#DB0000" },
    { color: "#D60000" },
    { color: "#D10000" },
    { color: "#CC0000" },
    { color: "#C70000" },
    { color: "#C20000" },
    { color: "#BD0000" },
    { color: "#B80000" },
    { color: "#B20000" },
    { color: "#AD0000" },
    { color: "#A80000" },
    { color: "#A30000" },
    { color: "#9E0000" },
    { color: "#990000" },
    { color: "#940000" },
    { color: "#8F0000" },
    { color: "#8A0000" },
    { color: "#850000" },
    { color: "#800000" },
    // { color: "#FFFAF2" },
    // { color: "#FFF7E8" },
    { color: "#FFF3DE" },
    { color: "#FFF0D4" },
    { color: "#FFECC9" },
    { color: "#FFE8BF" },
    { color: "#FFE5B5" },
    { color: "#FFE1AB" },
    { color: "#FFDEA1" },
    { color: "#FFDA96" },
    { color: "#FFD78C" },
    { color: "#FFD382" },
    { color: "#FFCF78" },
    { color: "#FFCC6E" },
    { color: "#FFC863" },
    { color: "#FFC559" },
    { color: "#FFC14F" },
    { color: "#FFBD45" },
    { color: "#FFBA3B" },
    { color: "#FFB630" },
    { color: "#FFB326" },
    { color: "#FFB01C" },
    { color: "#FFAC12" },
    { color: "#FFA600" },
    { color: "#F59F00" },
    { color: "#F09C00" },
    { color: "#EB9900" },
    { color: "#E69500" },
    { color: "#E09200" },
    { color: "#DB8F00" },
    { color: "#D68B00" },
    { color: "#D18800" },
    { color: "#CC8500" },
    { color: "#C78100" },
    { color: "#C27E00" },
    { color: "#BD7B00" },
    { color: "#B87800" },
    { color: "#B27400" },
    { color: "#AD7100" },
    { color: "#A86E00" },
    { color: "#A36A00" },
    { color: "#9E6700" },
    { color: "#996400" },
    { color: "#946000" },
    { color: "#8F5D00" },
    { color: "#8A5A00" },
    { color: "#855600" },
    { color: "#805300" },
    // { color: "#FFFFF2" },
    // { color: "#FFFFE8" },
    { color: "#FFFFDE" },
    { color: "#FFFFD4" },
    { color: "#FFFFC9" },
    { color: "#FFFFBF" },
    { color: "#FFFFB5" },
    { color: "#FFFFAB" },
    { color: "#FFFFA1" },
    { color: "#FFFF96" },
    { color: "#FFFF8C" },
    { color: "#FFFF82" },
    { color: "#FFFF78" },
    { color: "#FFFF6E" },
    { color: "#FFFF63" },
    { color: "#FFFF59" },
    { color: "#FFFF4F" },
    { color: "#FFFF45" },
    { color: "#FFFF3B" },
    { color: "#FFFF30" },
    { color: "#FFFF26" },
    { color: "#FFFF1C" },
    { color: "#FFFF0F" },
    { color: "#FFFF00" },
    { color: "#F5F500" },
    { color: "#F0F000" },
    { color: "#EBEB00" },
    { color: "#E6E600" },
    { color: "#E0E000" },
    { color: "#DBDB00" },
    { color: "#D6D600" },
    { color: "#D1D100" },
    { color: "#CCCC00" },
    { color: "#C7C700" },
    { color: "#C2C200" },
    { color: "#BDBD00" },
    { color: "#B8B800" },
    { color: "#B2B200" },
    { color: "#ADAD00" },
    { color: "#A8A800" },
    { color: "#A3A300" },
    { color: "#9E9E00" },
    { color: "#999900" },
    { color: "#949400" },
    { color: "#8F8F00" },
    { color: "#8A8A00" },
    { color: "#858500" },
    { color: "#808000" },
    // { color: "#F2FFF2" },
    { color: "#E8FFE8" },
    { color: "#DEFFDE" },
    { color: "#D4FFD4" },
    { color: "#C9FFC9" },
    { color: "#BFFFBF" },
    { color: "#B5FFB5" },
    { color: "#ABFFAB" },
    { color: "#A1FFA1" },
    { color: "#96FF96" },
    { color: "#8CFF8C" },
    { color: "#82FF82" },
    { color: "#78FF78" },
    { color: "#6EFF6E" },
    { color: "#63FF63" },
    { color: "#59FF59" },
    { color: "#4FFF4F" },
    { color: "#45FF45" },
    { color: "#3BFF3B" },
    { color: "#30FF30" },
    { color: "#26FF26" },
    { color: "#1AFF19" },
    { color: "#0DFF0D" },
    { color: "#00FF00" },
    { color: "#00F500" },
    { color: "#00F000" },
    { color: "#00EB00" },
    { color: "#00E600" },
    { color: "#00E000" },
    { color: "#00DB00" },
    { color: "#00D600" },
    { color: "#00D100" },
    { color: "#00CC00" },
    { color: "#00C700" },
    { color: "#00C200" },
    { color: "#00BD00" },
    { color: "#00B800" },
    { color: "#00B200" },
    { color: "#00AD00" },
    { color: "#00A800" },
    { color: "#00A300" },
    { color: "#009E00" },
    { color: "#009900" },
    { color: "#009400" },
    { color: "#008F00" },
    { color: "#008A00" },
    { color: "#008500" },
    { color: "#008000" },
    // { color: "#F2FFFF" },
    // { color: "#E8FFFF" },
    { color: "#DEFFFF" },
    { color: "#D4FFFF" },
    { color: "#C9FFFF" },
    { color: "#BFFFFF" },
    { color: "#B5FFFF" },
    { color: "#ABFFFF" },
    { color: "#A1FFFF" },
    { color: "#96FFFF" },
    { color: "#8CFFFF" },
    { color: "#82FFFF" },
    { color: "#78FFFF" },
    { color: "#6EFFFF" },
    { color: "#63FFFF" },
    { color: "#59FFFF" },
    { color: "#4FFFFF" },
    { color: "#45FFFF" },
    { color: "#3DFFFF" },
    { color: "#30FFFF" },
    { color: "#26FFFF" },
    { color: "#1CFFFF" },
    { color: "#12FFFF" },
    { color: "#00FFFF" },
    { color: "#00F5F5" },
    { color: "#00F0F0" },
    { color: "#00EBEB" },
    { color: "#00E6E6" },
    { color: "#00E0E0" },
    { color: "#00DBDB" },
    { color: "#00D6D6" },
    { color: "#00D1D1" },
    { color: "#00CCCC" },
    { color: "#00C7C7" },
    { color: "#00C2C2" },
    { color: "#00BDBD" },
    { color: "#00B8B8" },
    { color: "#00B2B2" },
    { color: "#00ADAD" },
    { color: "#00A8A8" },
    { color: "#00A3A3" },
    { color: "#009E9E" },
    { color: "#009999" },
    { color: "#009494" },
    { color: "#008F8F" },
    { color: "#008A8A" },
    { color: "#008585" },
    { color: "#008080" },
    // { color: "#EBEBFF" },
    { color: "#E0E0FF" },
    { color: "#D6D6FF" },
    { color: "#CCCCFF" },
    { color: "#C2C2FF" },
    { color: "#B8B8FF" },
    { color: "#ADADFF" },
    { color: "#A3A3FF" },
    { color: "#9999FF" },
    { color: "#8C8CFF" },
    { color: "#8282FF" },
    { color: "#7878FF" },
    { color: "#6E6EFF" },
    { color: "#6363FF" },
    { color: "#5959FF" },
    { color: "#4F4FFF" },
    { color: "#4545FF" },
    { color: "#3B3BFF" },
    { color: "#3030FF" },
    { color: "#2626FF" },
    { color: "#1C1CFF" },
    { color: "#1212FF" },
    { color: "#0808FF" },
    { color: "#0000FF" },
    { color: "#0000FA" },
    { color: "#0000F5" },
    { color: "#0000EB" },
    { color: "#0000E6" },
    { color: "#0000E0" },
    { color: "#0000DB" },
    { color: "#0000D6" },
    { color: "#0000D1" },
    { color: "#0000CC" },
    { color: "#0000C7" },
    { color: "#0000C2" },
    { color: "#0000BD" },
    { color: "#0000B8" },
    { color: "#0000B2" },
    { color: "#0000AD" },
    { color: "#0000A8" },
    { color: "#0000A3" },
    { color: "#00009E" },
    { color: "#000099" },
    { color: "#000094" },
    { color: "#00008F" },
    { color: "#00008A" },
    { color: "#000085" },
    { color: "#000080" },
    // { color: "#FAF2FF" },
    // { color: "#F5E8FF" },
    { color: "#F1DEFF" },
    { color: "#EDD4FF" },
    { color: "#E8C9FF" },
    { color: "#E4BFFF" },
    { color: "#E0B5FF" },
    { color: "#DBABFF" },
    { color: "#D7A1FF" },
    { color: "#D396FF" },
    { color: "#CE8CFF" },
    { color: "#CA82FF" },
    { color: "#C678FF" },
    { color: "#C26EFF" },
    { color: "#BD63FF" },
    { color: "#B959FF" },
    { color: "#B54FFF" },
    { color: "#B045FF" },
    { color: "#AC3BFF" },
    { color: "#A830FF" },
    { color: "#A326FF" },
    { color: "#9F1CFF" },
    { color: "#990DFF" },
    { color: "#9300FF" },
    { color: "#9300FF" },
    { color: "#8D00F5" },
    { color: "#8700EB" },
    { color: "#8400E6" },
    { color: "#8100E0" },
    { color: "#7F00DB" },
    { color: "#7C00D6" },
    { color: "#7900D1" },
    { color: "#7600CC" },
    { color: "#7300C7" },
    { color: "#7000C2" },
    { color: "#6D00BD" },
    { color: "#6A00B8" },
    { color: "#6700B2" },
    { color: "#6400AD" },
    { color: "#6100A8" },
    { color: "#5E00A3" },
    { color: "#5B009E" },
    { color: "#580099" },
    { color: "#550094" },
    { color: "#52008F" },
    { color: "#4F008A" },
    { color: "#4C0085" },
    { color: "#4A0080" },
    // { color: "#FFF2FF" },
    // { color: "#FFE8FF" },
    { color: "#FFDEFF" },
    { color: "#FFD4FF" },
    { color: "#FFC9FF" },
    { color: "#FFBFFF" },
    { color: "#FFB5FF" },
    { color: "#FFABFF" },
    { color: "#FFA1FF" },
    { color: "#FF96FF" },
    { color: "#FF8CFF" },
    { color: "#FF82FF" },
    { color: "#FF78FF" },
    { color: "#FF6EFF" },
    { color: "#FF63FF" },
    { color: "#FF59FF" },
    { color: "#FF4FFF" },
    { color: "#FF45FF" },
    { color: "#FF3BFF" },
    { color: "#FF30FF" },
    { color: "#FF26FF" },
    { color: "#FF19FF" },
    { color: "#FF0DFF" },
    { color: "#FF00FF" },
    { color: "#F700F7" },
    { color: "#F000F0" },
    { color: "#EB00EB" },
    { color: "#E600E5" },
    { color: "#E000E0" },
    { color: "#DB00DB" },
    { color: "#D600D6" },
    { color: "#D100D1" },
    { color: "#CC00CC" },
    { color: "#C700C7" },
    { color: "#C200C2" },
    { color: "#BD00BD" },
    { color: "#B800B8" },
    { color: "#B200B2" },
    { color: "#AD00AD" },
    { color: "#A800A8" },
    { color: "#A300A3" },
    { color: "#9E009E" },
    { color: "#990099" },
    { color: "#940094" },
    { color: "#8F008F" },
    { color: "#8A008A" },
    { color: "#850085" },
    { color: "#800080" },
    // { color: "#FAFAFA" },
    // { color: "#F5F5F5" },
    { color: "#EDEDED" },
    { color: "#E8E8E8" },
    { color: "#E3E3E3" },
    { color: "#DEDEDE" },
    { color: "#D9D9D9" },
    { color: "#D4D4D4" },
    { color: "#CFCFCF" },
    { color: "#C9C9C9" },
    { color: "#C4C4C4" },
    { color: "#BFBFBF" },
    { color: "#BABABA" },
    { color: "#B5B5B5" },
    { color: "#B0B0B0" },
    { color: "#ABABAB" },
    { color: "#A6A6A6" },
    { color: "#A1A1A1" },
    { color: "#9C9C9C" },
    { color: "#969696" },
    { color: "#919191" },
    { color: "#8C8C8C" },
    { color: "#878787" },
    { color: "#828282" },
    { color: "#7D7D7D" },
    { color: "#787878" },
    { color: "#737373" },
    { color: "#6E6E6E" },
    { color: "#696969" },
    { color: "#636363" },
    { color: "#5E5E5E" },
    { color: "#595959" },
    { color: "#545454" },
    { color: "#4F4F4F" },
    { color: "#4A4A4A" },
    { color: "#454545" },
    { color: "#404040" },
    { color: "#3B3B3B" },
    { color: "#363636" },
    { color: "#303030" },
    { color: "#2B2B2B" },
    { color: "#262626" },
    { color: "#212121" },
    { color: "#1C1C1C" },
    { color: "#171717" },
    { color: "#0F0F0F" },
    { color: "#0A0A0A" },
    { color: "#000000" }
]

export { color }