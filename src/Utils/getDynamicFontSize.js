export default function getDynamicFontSize(
    text,
    containerWidth,
    scalingFactor = 300,
    baseFontSize = 16,
    maxFontSize = 72
) {
    // Calculate initial size based on text length
    let fontSize = containerWidth / (text.length + scalingFactor);
    console.log(fontSize);

    fontSize = Math.min(fontSize, maxFontSize); // Ensure font size does not exceed maxFontSize
    fontSize = Math.max(fontSize, baseFontSize); // Ensure font size does not go below minFontSize

    return `${fontSize}px`;
}