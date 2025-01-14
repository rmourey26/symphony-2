//varying vec2 vUv;
uniform vec3 uCamPos;
uniform float uRadiusMultiplier;
// uniform mat3 uvTransform;
uniform float uTime;

uniform vec2 uOriginOffset;

varying vec4 vWorldPosition;

#define PHYSICAL

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
// #include <uv_pars_vertex>
varying vec2 vUv;
uniform mat3 uvTransform;

#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	// #include <uv_vertex>
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>

	transformed.xz += uOriginOffset;

	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	//#include <worldpos_vertex>
	vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );
	vWorldPosition = worldPosition;

	#include <shadowmap_vertex>
	#include <fog_vertex>
}
