const frame = document.createElement("div");
frame.classList.add("frame");

for (let x = 1; x <= 400; x++){
    const pxl = document.createElement("div")
    pxl.classList.add("pixel")

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.id = ('pixel-' + x);
    
    if (x == 44 || x == 45 || x == 46  || x == 63 || x == 64 || x == 65  || x == 83 ||
        x == 84  || x == 103 ||  x == 108 || x == 357 || x == 338 || x == 298  || 
        x == 317  || x == 318  || x == 336  || x == 337  || x == 355 || x == 356 ||
        x >= 109 && x <= 113 || x == 127 ||  x == 128 || x == 133 ||  x == 134 || 
        x == 146 || x == 147 || x == 154 || x == 155 ||  x == 166 || x == 168 ||
        x == 169 ||  x == 172 ||  x == 175 || x == 186 || x == 188 || x == 189 ||
        x == 191 ||  x == 192 ||  x == 193 || x == 195 || x == 206 || x == 215 ||
        x == 226 ||  x == 235 ||  x == 246 || x == 249 || x == 250 || x == 251 ||
        x == 255 ||  x == 266 ||  x == 267 || x == 274 || x == 275 || x == 287 ||
        x == 288 ||  x == 293 ||  x == 294 || x >= 308 && x <= 313 ){
        checkbox.checked = true;
    }

    pxl.appendChild(checkbox);

    const label = document.createElement('label');
    label.classList.add('tab');
    label.htmlFor = ('pixel-' + x);
    
    pxl.appendChild(label);

    frame.appendChild(pxl);
}

document.body.appendChild(frame);
