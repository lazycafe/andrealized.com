import { KaboomCtx } from "./kaboom"
declare global {
	const add: KaboomCtx["add"]
	const readd: KaboomCtx["readd"]
	const get: KaboomCtx["get"]
	const destroy: KaboomCtx["destroy"]
	const destroyAll: KaboomCtx["destroyAll"]
	const pos: KaboomCtx["pos"]
	const scale: KaboomCtx["scale"]
	const rotate: KaboomCtx["rotate"]
	const color: KaboomCtx["color"]
	const opacity: KaboomCtx["opacity"]
	const sprite: KaboomCtx["sprite"]
	const text: KaboomCtx["text"]
	const rect: KaboomCtx["rect"]
	const circle: KaboomCtx["circle"]
	const uvquad: KaboomCtx["uvquad"]
	const area: KaboomCtx["area"]
	const anchor: KaboomCtx["anchor"]
	const z: KaboomCtx["z"]
	const outline: KaboomCtx["outline"]
	const body: KaboomCtx["body"]
	const doubleJump: KaboomCtx["doubleJump"]
	const move: KaboomCtx["move"]
	const offscreen: KaboomCtx["offscreen"]
	const follow: KaboomCtx["follow"]
	const shader: KaboomCtx["shader"]
	const timer: KaboomCtx["timer"]
	const fixed: KaboomCtx["fixed"]
	const stay: KaboomCtx["stay"]
	const health: KaboomCtx["health"]
	const lifespan: KaboomCtx["lifespan"]
	const state: KaboomCtx["state"]
	const fadeIn: KaboomCtx["fadeIn"]
	const tile: KaboomCtx["tile"]
	const agent: KaboomCtx["agent"]
	const on: KaboomCtx["on"]
	const onUpdate: KaboomCtx["onUpdate"]
	const onDraw: KaboomCtx["onDraw"]
	const onAdd: KaboomCtx["onAdd"]
	const onDestroy: KaboomCtx["onDestroy"]
	const onLoad: KaboomCtx["onLoad"]
	const onLoading: KaboomCtx["onLoading"]
	const onError: KaboomCtx["onError"]
	const onResize: KaboomCtx["onResize"]
	const onCleanup: KaboomCtx["onCleanup"]
	const onGamepadConnect: KaboomCtx["onGamepadConnect"]
	const onGamepadDisconnect: KaboomCtx["onGamepadDisconnect"]
	const onCollide: KaboomCtx["onCollide"]
	const onCollideUpdate: KaboomCtx["onCollideUpdate"]
	const onCollideEnd: KaboomCtx["onCollideEnd"]
	const onClick: KaboomCtx["onClick"]
	const onHover: KaboomCtx["onHover"]
	const onHoverUpdate: KaboomCtx["onHoverUpdate"]
	const onHoverEnd: KaboomCtx["onHoverEnd"]
	const onKeyDown: KaboomCtx["onKeyDown"]
	const onKeyPress: KaboomCtx["onKeyPress"]
	const onKeyPressRepeat: KaboomCtx["onKeyPressRepeat"]
	const onKeyRelease: KaboomCtx["onKeyRelease"]
	const onCharInput: KaboomCtx["onCharInput"]
	const onMouseDown: KaboomCtx["onMouseDown"]
	const onMousePress: KaboomCtx["onMousePress"]
	const onMouseRelease: KaboomCtx["onMouseRelease"]
	const onMouseMove: KaboomCtx["onMouseMove"]
	const onTouchStart: KaboomCtx["onTouchStart"]
	const onTouchMove: KaboomCtx["onTouchMove"]
	const onTouchEnd: KaboomCtx["onTouchEnd"]
	const onScroll: KaboomCtx["onScroll"]
	const onGamepadButtonDown: KaboomCtx["onGamepadButtonDown"]
	const onGamepadButtonPress: KaboomCtx["onGamepadButtonPress"]
	const onGamepadButtonRelease: KaboomCtx["onGamepadButtonRelease"]
	const onGamepadStick: KaboomCtx["onGamepadStick"]
	const onSceneLeave: KaboomCtx["onSceneLeave"]
	const loadRoot: KaboomCtx["loadRoot"]
	const loadSprite: KaboomCtx["loadSprite"]
	const loadSpriteAtlas: KaboomCtx["loadSpriteAtlas"]
	const loadAseprite: KaboomCtx["loadAseprite"]
	const loadPedit: KaboomCtx["loadPedit"]
	const loadBean: KaboomCtx["loadBean"]
	const loadJSON: KaboomCtx["loadJSON"]
	const loadSound: KaboomCtx["loadSound"]
	const loadFont: KaboomCtx["loadFont"]
	const loadBitmapFont: KaboomCtx["loadBitmapFont"]
	const loadShader: KaboomCtx["loadShader"]
	const loadShaderURL: KaboomCtx["loadShaderURL"]
	const load: KaboomCtx["load"]
	const loadProgress: KaboomCtx["loadProgress"]
	const getSprite: KaboomCtx["getSprite"]
	const getSound: KaboomCtx["getSound"]
	const getFont: KaboomCtx["getFont"]
	const getBitmapFont: KaboomCtx["getBitmapFont"]
	const getShader: KaboomCtx["getShader"]
	const getAsset: KaboomCtx["getAsset"]
	const Asset: KaboomCtx["Asset"]
	const SpriteData: KaboomCtx["SpriteData"]
	const SoundData: KaboomCtx["SoundData"]
	const width: KaboomCtx["width"]
	const height: KaboomCtx["height"]
	const center: KaboomCtx["center"]
	const dt: KaboomCtx["dt"]
	const time: KaboomCtx["time"]
	const isFocused: KaboomCtx["isFocused"]
	const isTouchScreen: KaboomCtx["isTouchScreen"]
	const mousePos: KaboomCtx["mousePos"]
	const mouseDeltaPos: KaboomCtx["mouseDeltaPos"]
	const isKeyDown: KaboomCtx["isKeyDown"]
	const isKeyPressed: KaboomCtx["isKeyPressed"]
	const isKeyPressedRepeat: KaboomCtx["isKeyPressedRepeat"]
	const isKeyReleased: KaboomCtx["isKeyReleased"]
	const isMouseDown: KaboomCtx["isMouseDown"]
	const isMousePressed: KaboomCtx["isMousePressed"]
	const isMouseReleased: KaboomCtx["isMouseReleased"]
	const isMouseMoved: KaboomCtx["isMouseMoved"]
	const isGamepadButtonPressed: KaboomCtx["isGamepadButtonPressed"]
	const isGamepadButtonDown: KaboomCtx["isGamepadButtonDown"]
	const isGamepadButtonReleased: KaboomCtx["isGamepadButtonReleased"]
	const charInputted: KaboomCtx["charInputted"]
	const shake: KaboomCtx["shake"]
	const camPos: KaboomCtx["camPos"]
	const camScale: KaboomCtx["camScale"]
	const camRot: KaboomCtx["camRot"]
	const toScreen: KaboomCtx["toScreen"]
	const toWorld: KaboomCtx["toWorld"]
	const setGravity: KaboomCtx["setGravity"]
	const getGravity: KaboomCtx["getGravity"]
	const setBackground: KaboomCtx["setBackground"]
	const getBackground: KaboomCtx["getBackground"]
	const getGamepads: KaboomCtx["getGamepads"]
	const setCursor: KaboomCtx["setCursor"]
	const getCursor: KaboomCtx["getCursor"]
	const setCursorLocked: KaboomCtx["setCursorLocked"]
	const isCursorLocked: KaboomCtx["isCursorLocked"]
	const setFullscreen: KaboomCtx["setFullscreen"]
	const isFullscreen: KaboomCtx["isFullscreen"]
	const wait: KaboomCtx["wait"]
	const loop: KaboomCtx["loop"]
	const Timer: KaboomCtx["Timer"]
	const play: KaboomCtx["play"]
	const burp: KaboomCtx["burp"]
	const volume: KaboomCtx["volume"]
	const audioCtx: KaboomCtx["audioCtx"]
	const rand: KaboomCtx["rand"]
	const randi: KaboomCtx["randi"]
	const randSeed: KaboomCtx["randSeed"]
	const vec2: KaboomCtx["vec2"]
	const rgb: KaboomCtx["rgb"]
	const hsl2rgb: KaboomCtx["hsl2rgb"]
	const quad: KaboomCtx["quad"]
	const choose: KaboomCtx["choose"]
	const chance: KaboomCtx["chance"]
	const lerp: KaboomCtx["lerp"]
	const tween: KaboomCtx["tween"]
	const easings: KaboomCtx["easings"]
	const map: KaboomCtx["map"]
	const mapc: KaboomCtx["mapc"]
	const wave: KaboomCtx["wave"]
	const deg2rad: KaboomCtx["deg2rad"]
	const rad2deg: KaboomCtx["rad2deg"]
	const testLinePoint: KaboomCtx["testLinePoint"]
	const testLineLine: KaboomCtx["testLineLine"]
	const testLineCircle: KaboomCtx["testLineCircle"]
	const testRectRect: KaboomCtx["testRectRect"]
	const testRectLine: KaboomCtx["testRectLine"]
	const testRectPoint: KaboomCtx["testRectPoint"]
	const testCirclePolygon: KaboomCtx["testCirclePolygon"]
	const Line: KaboomCtx["Line"]
	const Rect: KaboomCtx["Rect"]
	const Circle: KaboomCtx["Circle"]
	const Polygon: KaboomCtx["Polygon"]
	const Vec2: KaboomCtx["Vec2"]
	const Color: KaboomCtx["Color"]
	const Mat4: KaboomCtx["Mat4"]
	const Quad: KaboomCtx["Quad"]
	const RNG: KaboomCtx["RNG"]
	const scene: KaboomCtx["scene"]
	const go: KaboomCtx["go"]
	const addLevel: KaboomCtx["addLevel"]
	const getData: KaboomCtx["getData"]
	const setData: KaboomCtx["setData"]
	const drawSprite: KaboomCtx["drawSprite"]
	const drawText: KaboomCtx["drawText"]
	const drawRect: KaboomCtx["drawRect"]
	const drawLine: KaboomCtx["drawLine"]
	const drawLines: KaboomCtx["drawLines"]
	const drawTriangle: KaboomCtx["drawTriangle"]
	const drawCircle: KaboomCtx["drawCircle"]
	const drawEllipse: KaboomCtx["drawEllipse"]
	const drawPolygon: KaboomCtx["drawPolygon"]
	const drawUVQuad: KaboomCtx["drawUVQuad"]
	const drawFormattedText: KaboomCtx["drawFormattedText"]
	const drawMasked: KaboomCtx["drawMasked"]
	const drawSubtracted: KaboomCtx["drawSubtracted"]
	const pushTransform: KaboomCtx["pushTransform"]
	const popTransform: KaboomCtx["popTransform"]
	const pushTranslate: KaboomCtx["pushTranslate"]
	const pushScale: KaboomCtx["pushScale"]
	const pushRotate: KaboomCtx["pushRotate"]
	const pushMatrix: KaboomCtx["pushMatrix"]
	const usePostEffect: KaboomCtx["usePostEffect"]
	const formatText: KaboomCtx["formatText"]
	const debug: KaboomCtx["debug"]
	const plug: KaboomCtx["plug"]
	const screenshot: KaboomCtx["screenshot"]
	const download: KaboomCtx["download"]
	const downloadText: KaboomCtx["downloadText"]
	const downloadJSON: KaboomCtx["downloadJSON"]
	const downloadBlob: KaboomCtx["downloadBlob"]
	const record: KaboomCtx["record"]
	const addKaboom: KaboomCtx["addKaboom"]
	const ASCII_CHARS: KaboomCtx["ASCII_CHARS"]
	const LEFT: KaboomCtx["LEFT"]
	const RIGHT: KaboomCtx["RIGHT"]
	const UP: KaboomCtx["UP"]
	const DOWN: KaboomCtx["DOWN"]
	const RED: KaboomCtx["RED"]
	const GREEN: KaboomCtx["GREEN"]
	const BLUE: KaboomCtx["BLUE"]
	const YELLOW: KaboomCtx["YELLOW"]
	const MAGENTA: KaboomCtx["MAGENTA"]
	const CYAN: KaboomCtx["CYAN"]
	const WHITE: KaboomCtx["WHITE"]
	const BLACK: KaboomCtx["BLACK"]
	const canvas: KaboomCtx["canvas"]
	const quit: KaboomCtx["quit"]
	const Event: KaboomCtx["Event"]
	const EventHandler: KaboomCtx["EventHandler"]
	const EventController: KaboomCtx["EventController"]
	const VERSION: KaboomCtx["VERSION"]
}