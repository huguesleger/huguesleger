import cnoise from "./cnoise";

const vertexTest = /* glsl */ `

uniform float uTime;
uniform float uFrequency;
uniform vec3 uPrimaryColor;
uniform vec3 uSecondaryColor;

varying vec3 vColor;
varying vec3 vPosition;

${cnoise}

void main() {

    float displacement = cnoise(vec4(normal * uFrequency, uTime)) * 0.6766666;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    modelPosition.xyz += normal * displacement;
    vPosition = modelPosition.xyz;
    vColor = mix(uPrimaryColor, uSecondaryColor, smoothstep(0.1, 0.9, displacement)); 

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}

`;

export default vertexTest;
