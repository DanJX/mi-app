import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorSizePicker = () => {
    const [color, setColor] = useState('#fff');
    const [colors, setColors] = useState(['']);
    const [size, setSize] = useState('');
    const [sizes, setSizes] = useState(['']);

    const handleColorChangeComplete = (color:any) => {
        setColor(color.hex);
    };

    const addColor = () => {
        setColors([...colors, color]);
    };

    const addSize = () => {
        if (size && !sizes.includes(size)) {
            setSizes([...sizes, size]);
            setSize('');
        }
    };

    return (
        <div>
            <h1>Color and Size Picker</h1>
            <SketchPicker 
                color={color}
                onChangeComplete={handleColorChangeComplete}
            />
            <button onClick={addColor}>Add Color</button>

            <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Add size"
            />
            <button onClick={addSize}>Add Size</button>

            <h3>Colors</h3>
            <ul>
                {colors.map((c, index) => (
                    <li key={index} style={{ color: c }}>{c}</li>
                ))}
            </ul>

            <h3>Sizes</h3>
            <ul>
                {sizes.map((s, index) => (
                    <li key={index}>{s}</li>
                ))}
            </ul>
        </div>
    );
};

export default ColorSizePicker;