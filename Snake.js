/***
 * Copyright (C) Rodolfo Herrera Hernandez. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root
 * for full license information.
 *
 * =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
 *
 * For related information - https://github.com/codewithrodi/SnakeJS/
 *
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 ****/

class AlgorithmsHandler {
	MergeList = (list_a, list_b) => Object.assign({}, list_a, list_b);
	RandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	RandomNumber = (min, max) => Math.random() * (max - min) + min;

	StringGenerator = (len = 8, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
		let str = '',
			i = 0;
		for (i; i < len; i++) str += characters.charAt(Math.floor(Math.random() * len));
		return str;
	}

	BinarySearch = (value, list) => {
		let first = 0,
			last = list.length - 1,
			pos = -1,
			found = false,
			mid;
		while (found == false && first <= last) {
			mid = Math.floor((first + last) / 2);
			if (list[mid] == value) found = true, pos = mid;
			else if (list[mid] > value) last = mid - 1;
			else first = mid + 1;
		}
		return pos;
	}

	LinearSearch = (value, list) => {
		let len = list.length,
			i = 0;
		for (i; i < len; i++)
			if (list[i] == value) return i;
		return -1;
	}

	InsertionSort = (list) => {
		let len = list.length,
			i = 1;
		for (i; i < len; i++) {
			let value = list[i],
				aux = i - 1;
			while (aux >= 0 && list[aux] > value) list[aux + 1] = list[aux], aux = aux - 1;
			list[aux + 1] = value;
		}
		return list;
	}

	QuickSort = (list) => {
		let len = list.length,
			pivot = list[0],
			left = [],
			right = [],
			i = 1;
		if (len <= 1) return list;
		for (i; i < len; i++) list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
		return this.QuickSort(left).concat(pivot, this.QuickSort(right));
	}

	SelectionSort = (list) => {
		let len = list.length,
			i = 0;
		for (i; i < len; i++) {
			let min = i,
				j = i + 1;
			for (j; j < len; j++)
				if (list[j] < list[min]) min = j;
			if (min != i) {
				let tmp = list[i];
				list[i] = list[min];
				list[min] = tmp;
			}
		}
		return list;
	}

	MergeSort = (list) => {
		let len = list.length,
			mid = parseInt(list.length / 2) | 0,
			left = list.slice(0, mid),
			right = list.slice(mid);
		if (len < 2) return list;

		function merge(left, right) {
			let l_it = 0,
				r_it = 0,
				l_len = left.length,
				r_len = right.length,
				result = [];
			while (l_it < l_len && r_it < r_len) result.push((left[l_it] < right[r_it]) ? left[l_it++] : right[r_it++]);

			return [...result, ...left.slice(l_it), ...right.slice(r_it)];
		}
		return merge(this.MergeSort(left), this.MergeSort(right));
	}
}

const Algorithms = new AlgorithmsHandler();

raise = (msg, type = 'undefined') => {
	switch (type.toLowerCase()) {
		case 'error':
			console.error(msg);
			break;
		case 'log':
			console.log(msg);
			break;
		case 'warn':
			console.warn(msg);
			break;
		default:
			console.error(msg);
	}
}

class DateHandler {
	GetDate = () => new Date();
	GetCurrentDay = () => new Date().getDay();
	GetCurrentYear = () => new Date().getFullYear();
	GetCurrentMonth = () => new Date().getMonth();
	GetCurrentHour = () => new Date().getHours();
	GetCurrentMinutes = () => new Date().getMinutes();
	GetCurrentSeconds = () => new Date().getSeconds();
	GetDateFromExistingDate = (date) => new Date(date);
}

const Datetime = new DateHandler();

class Form {
	constructor(NodeInstance) {
		this.i = NodeInstance;
		this.e = NodeInstance.GetInstance();
	}

	OnReset = (a) => this.e.addEventListener('reset', a);
	Submit = () => this.e.submit();
	OnSubmit = (action) => this.e.addEventListener('submit', action);
	Reset = () => this.e.reset();
	GetAction = () => this.e.action;
	GetEnctype = () => this.e.enctype;
	GetElements = () => this.e.length;
	GetMethod = () => this.e.method;
	GetTarget = () => this.e.target;
	GetName = () => this.e.name;
}

class Input {
	constructor(NodeInstance) {
		this.i = NodeInstance;
		this.e = NodeInstance.GetInstance();
	}

	OnInput = (a) => this.e.addEventListener('input', a);
	OnInvalid = (a) => this.e.addEventListener('invalid', a);
	OnSelect = (a) => this.e.addEventListener('select', a);
	Disable = () => this.e.disabled = true;
	Enable = () => this.e.disabled = false;
	HideInput = () => this.i.SetAttribute('hidden');
	UnHideInput = () => {
		if (this.i.HasAttribute('hidden')) this.i.RemoveAttribute('hidden');
	}
	Reset = () => this.e.value = '';
	CheckCheckbox = () => this.i.SetAttribute('checked');
	UnCheckCheckbox = () => {
		if (this.i.HasAttribute('checked')) this.i.RemoveAttribute('checked');
	}
	SetValue = (x) => this.e.value = x;
	SetRequiredAttribute = () => {
		if (!this.i.HasAttribute('required')) this.i.SetAttribute('required');
	}
	SetType = (x) => this.i.SetAttribute('type', x);
	SetMaxLength = (x) => this.i.SetAttribute('maxlength', x);
	SetMinLength = (x) => this.i.SetAttribute('minlength', x);
	SetMaxRange = (x) => this.i.SetAttribute('max', x);
	SetMinRange = (x) => this.i.SetAttribute('min', x);
	SetPlaceholder = (x) => this.i.SetAttribute('placeholder', x);
	GetType = () => this.i.GetAttribute('type');
	GetPlaceholder = () => this.i.GetAttribute('placeholder');
	GetMaxRange = () => this.i.GetAttribute('max');
	GetMinRange = () => this.i.GetAttribute('min');
	MultipleSelect = () => this.e.multiple = true;
	UniqueSelect = () => this.e.multiple = false;
	RemoveSelectedElement = () => this.e.remove(this.e.selectedIndex);
	GetName = () => this.e.name;
	GetMaxLength = () => this.i.GetAttribute('maxlength');
	GetMinLength = () => this.i.GetAttribute('minlength');
	IsRequired = () => (this.i.HasAttribute('required')) ? true : false;
}

class ServerHandler {
	GetProtocol = () => location.protocol;
	GetPort = () => location.port;
	GetOrigin = () => location.origin;
	GetHostname = () => location.hostname;
	GetHost = () => location.host;
	GetLocation = () => location.href;
	GetDomain = () => document.domain;
}

const Server = new ServerHandler();

class Node {
	constructor(element, method = 'id') {
		this.e = this.GetElement(element, method);
		this.s = this.e.style;
		if (this.e == undefined) raise(`The element [<${dom_element}> required using <${method.toUpperCase()}>] was not found in the DOM.`)
	}

	OnClick = (a) => this.e.addEventListener('click', a);
	OnMouseOver = (a) => this.e.addEventListener('mouseover', a);
	OnMouseOut = (a) => this.e.addEventListener('mouseout', a);
	OnMouseMove = (a) => this.e.addEventListener('mousemove', a);
	OnMouseLeave = (a) => this.e.addEventListener('mouseleave', a);
	OnMouseEnter = (a) => this.e.addEventListener('mouseenter', a);
	OnMouseWheel = (a) => this.e.addEventListener('mousewheel', a);
	OnMouseUp = (a) => this.e.addEventListener('mouseup', a)
	OnBlur = (a) => this.e.addEventListener('blur', a);
	OnContextMenu = (a) => this.e.addEventListener('blur', a);
	OnChange = (a) => this.e.addEventListener('change', a);
	OnDoubleClick = (a) => this.e.addEventListener('dblclick', a);
	OnFocus = (a) => this.e.addEventListener('focus', a);
	OnKeyDown = (a) => this.e.addEventListener('keydown', a);
	OnKeyPress = (a) => this.e.addEventListener('keypress', a);
	OnKeyUp = (a) => this.e.addEventListener('keyup', a);
	OnLoad = (a) => this.e.addEventListener('load', a);
	OnMouseDown = (a) => this.e.addEventListener('mousedown', a);
	OnMouseUp = (a) => this.e.addEventListener('mouseup', a);
	OnReset = (a) => this.e.addEventListener('reset', a);
	OnSelect = (a) => this.e.addEventListener('select', a);
	OnAnimationEnd = (a) => this.e.addEventListener('animationend', a);
	OnAnimationIteration = (a) => this.e.addEventListener('animationiteration', a);
	OnAnimationStart = (a) => this.e.addEventListener('animationstart', a);
	OnDrag = (a) => this.e.addEventListener('drag', a);
	OnDragEnd = (a) => this.e.addEventListener('dragend', a);
	OnDragLeave = (a) => this.e.addEventListener('dragleave', a);
	OnDragOver = (a) => this.e.addEventListener('dragover', a);
	OnDragStart = (a) => this.e.addEventListener('dragstart', a);
	OnDrop = (a) => this.e.addEventListener('drop', a);
	OnDragEnter = (a) => this.e.addEventListener('dragenter', a);
	OnTouchStart = (a) => this.e.addEventListener('touchstart', a);
	OnTouchMove = (a) => this.e.addEventListener('touchmove', a);
	OnTouchEnd = (a) => this.e.addEventListener('touchend', a);
	OnTouchCancel = (a) => this.e.addEventListener('touchcancel', a);
	OnReadyStateChange = (a) => this.e.addEventListener('readystatechange', a);
	OnCopy = (a) => this.e.addEventListener('copy', a);
	OnCut = (a) => this.e.addEventListener('cut', a);
	OnPaste = (a) => this.e.addEventListener('paste', a);
	OnBeforeScriptExecute = (a) => this.e.addEventListener('beforescriptexecute', a);
	OnAfterScriptExecute = (a) => this.e.addEventListener('afterscriptexecute', a);
	OnCanPlay = (a) => this.e.addEventListener('canplay', a);
	OnCanPlayThrough = (a) => this.e.addEventListener('canplaythrough', a);
	OnDurationChange = (a) => this.e.addEventListener('durationchange', a);
	OnEmptied = (a) => this.e.addEventListener('emptied', a);
	OnLoadedData = (a) => this.e.addEventListener('loadeddata', a);
	OnLoadedMetaData = (a) => this.e.addEventListener('loadedmetadata', a);
	OnLoadStart = (a) => this.e.addEventListener('loadstart', a);
	OnPause = (a) => this.e.addEventListener('pause', a);
	OnPlay = (a) => this.e.addEventListener('play', a);
	OnPlaying = (a) => this.e.addEventListener('playing', a);
	OnProgress = (a) => this.e.addEventListener('progress', a);
	OnRateChange = (a) => this.e.addEventListener('ratechange', a);
	OnSeeked = (a) => this.e.addEventListener('seeked', a);
	OnSeeking = (a) => this.e.addEventListener('seeking', a);
	OnShow = (a) => this.e.addEventListener('show', a);
	OnStalled = (a) => this.e.addEventListener('stalled', a);
	OnSuspend = (a) => this.e.addEventListener('suspend', a);
	OnTimeUpdate = (a) => this.e.addEventListener('timeupdate', a);
	OnVolumeChange = (a) => this.e.addEventListener('volumechange', a);
	OnWaiting = (a) => this.e.addEventListener('waiting', a);
	OnError = (a) => this.e.addEventListener('error', a);
	OnScroll = (a) => this.e.addEventListener('scroll', a);

	AlignContent = (x) => this.s.alignContent = x;
	AlignItems = (x) => this.s.alignItems = x;
	AlignmentBaseLine = (x) => this.s.alignmentBaseLine = x;
	All = (x) => this.s.all = x;
	Animation = (x) => this.s.animation = x;
	AnimationDelay = (x) => this.s.animationDelay = x;
	AnimationDirection = (x) => this.s.animationDirection = x;
	AnimationFillMode = (x) => this.s.animatonFillMode = x;
	AnimationIterationCount = (x) => this.s.animationIterationCount = x;
	AnimationName = (x) => this.s.animationName = x;
	AnimationPlayState = (x) => this.s.animationPlayState = x;
	AnimationTimingFunction = (x) => this.s.animationTimingFunction = x;
	Appearance = (x) => this.s.appearance = x;
	AscentOverride = (x) => this.s.ascentOverride = x;
	AspectRatio = (x) => this.s.aspectRatio = x;

	BackdropFilter = (x) => this.s.backdropFilter = x;
	BackfaceVisibility = (x) => this.s.backfaceVisibility = x;
	Background = (x) => this.s.background = x;
	BackgroundAttachment = (x) => this.s.backgroundAttachment = x;
	BackgroundBlendMode = (x) => this.s.backgroundBlendMode = x;
	BackgroundClip = (x) => this.s.backgroundClip = x;
	BackgroundColor = (x) => this.s.backgroundColor = x;
	BackgroundImage = (x) => this.s.backgroundImage = x;
	BackgroundOrigin = (x) => this.s.backgroundOrigin = x;
	BackgroundPosition = (x) => this.s.backgroundPosition = x;
	BackgroundPositionX = (x) => this.s.backgroundPositionX = x;
	BackgroundPositionY = (x) => this.s.backgroundPositionY = x;
	BackgroundRepeat = (x) => this.s.backgroundRepeat = x;
	BackgroundRepeatX = (x) => this.s.backgroundRepeatX = x;
	BackgroundRepeatY = (x) => this.s.backgroundRepeatY = x;
	BackgroundSize = (x) => this.s.backgroundSize = x;
	BaselineShift = (x) => this.s.baselineShift = x;
	BlockSize = (x) => this.s.blockSize = x;
	Border = (x) => this.s.border = x;
	BorderBlock = (x) => this.s.borderBlock = x;
	BorderBlockColor = (x) => this.s.borderBlockColor = x;
	BorderBlockEnd = (x) => this.s.borderBlockEnd = x;
	BorderBlockEndColor = (x) => this.s.borderBlockEndColor = x;
	BorderBlockEndWidth = (x) => this.s.borderBlockEndWidth = x;
	BorderBlockStart = (x) => this.s.borderBlockStart = x;
	BorderBlockStartColor = (x) => this.s.borderBlockStartColor = x;
	BorderBlockStartStyle = (x) => this.s.borderBlockStartStyle = x;
	BorderBlockStartWidth = (x) => this.s.borderBlockStartWidth = x;
	BorderBlockStyle = (x) => this.s.borderBlockStyle = x;
	BorderBlockWidth = (x) => this.s.borderBlockWidth = x;
	BorderBottom = (x) => this.s.borderBottom = x;
	BorderBottomColor = (x) => this.s.borderBottomColor = x;
	BorderBottomLeftRadius = (x) => this.s.borderBottomLeftRadius = x;
	BorderBottomRightRadius = (x) => this.s.borderBottomRightRadius = x;
	BorderBottomStyle = (x) => this.s.borderBottomStyle = x;
	BorderBottomWidth = (x) => this.s.borderBottomWidth = x;
	BorderCollapse = (x) => this.s.borderCollapse = x;
	BorderColor = (x) => this.s.borderColor = x;
	BorderEndEndRadius = (x) => this.s.borderEndEndRadius = x;
	BorderEndStartRadius = (x) => this.s.borderEndStartRadius = x;
	BorderImage = (x) => this.s.borderImage = x;
	BorderImageOutset = (x) => this.s.borderImageOutset = x;
	BorderImageRepeat = (x) => this.s.borderImageRepeat = x;
	BorderImageSource = (x) => this.s.borderImageSource = x;
	BorderImageWidth = (x) => this.s.borderImageWidth = x;
	BorderInline = (x) => this.s.borderInline = x;
	BorderInlineColor = (x) => this.s.borderInlineColor = x;
	BorderInlineEnd = (x) => this.s.borderInlineEnd = x;
	BorderInlineEndColor = (x) => this.s.borderInlineEndColor = x;
	BorderInlineEndStyle = (x) => this.s.borderInlineEndStyle = x;
	BorderInlineWidth = (x) => this.s.borderInlineWidth = x;
	BorderInlineStart = (x) => this.s.borderInlineStart = x;
	BorderInlineStartColor = (x) => this.s.borderInlineStartColor = x;
	BorderInlineStartStyle = (x) => this.s.borderInlineStartStyle = x;
	BorderInlineStartWidth = (x) => this.s.borderInlineStartWidth = x;
	BorderInlineStyle = (x) => this.s.borderInlineStyle = x;
	BorderInlineWidth = (x) => this.s.borderInlineWidth = x;
	BorderLeft = (x) => this.s.borderLeft = x;
	BorderLeftColor = (x) => this.s.borderLeftColor = x;
	BorderLeftStyle = (x) => this.s.borderLeftStyle = x;
	BorderLeftWidth = (x) => this.s.borderLeftWidth = x;
	BorderRadius = (x) => this.s.borderRadius = x;
	BorderRight = (x) => this.s.borderRight = x;
	BorderRightColor = (x) => this.s.borderRightColor = x;
	BorderRightStyle = (x) => this.s.borderRightStyle = x;
	BorderRightWidth = (x) => this.s.borderRightWidth = x;
	BorderSpacing = (x) => this.s.borderSpacing = x;
	BorderStartEndRadius = (x) => this.s.borderStartEndRadius = x;
	BorderStartStartRadius = (x) => this.s.borderStartStartRadius = x;
	BorderStyle = (x) => this.s.borderStyle = x;
	BorderTop = (x) => this.s.borderTop = x;
	BorderTopColor = (x) => this.s.borderTopColor = x;
	BorderTopLeftRadius = (x) => this.s.borderTopLeftRadius = x;
	BorderTopRightRadius = (x) => this.s.borderTopRightRadius = x;
	BorderTopStyle = (x) => this.s.borderTopStyle = x;
	BorderTopWidth = (x) => this.s.borderTopWidth = x;
	BorderWidth = (x) => this.s.borderWidth = x;
	BorderBottom = (x) => this.s.borderBottom = x;
	BoxShadow = (x) => this.s.boxShadow = x;
	BoxSizing = (x) => this.s.boxSizing = x;
	BreakAfter = (x) => this.s.breakAfter = x;
	BreakBefore = (x) => this.s.breakBefore = x;
	BreakInside = (x) => this.s.breakInside = x;
	BufferedRendering = (x) => this.s.bufferedRendering = x;

	CaptionSide = (x) => this.s.captionSide = x;
	CaretColor = (x) => this.s.caretColor = x;
	Clear = (x) => this.s.clear = x;
	Clip = (x) => this.s.clip = x;
	ClipPath = (x) => this.s.clipPath = x;
	ClipRule = (x) => this.s.clipRule = x;
	Color = (x) => this.s.color = x;
	ColorInterpolation = (x) => this.s.colorInterpolation = x;
	ColorInterpolationFilters = (x) => this.s.colorInterpolationFilters = x;
	ColorRendering = (x) => this.s.colorRendering = x;
	ColorScheme = (x) => this.s.colorScheme = x;
	ColumnCount = (x) => this.s.columnCount = x;
	ColumnFill = (x) => this.s.columnFill = x;
	ColumnGap = (x) => this.s.columnGap = x;
	ColumnRule = (x) => this.s.columnRule = x;
	ColumnRuleColor = (x) => this.s.columnRuleColor = x;
	ColumnRuleStyle = (x) => this.s.columnRuleStyle = x;
	ColumnRuleWidth = (x) => this.s.columnRuleWidth = x;
	ColumnSpan = (x) => this.s.columnSpan = x;
	ColumnWidth = (x) => this.s.columnWidth = x;
	Columns = (x) => this.s.columns = x;
	Contain = (x) => this.s.contain = x;
	ContainIntrinsicSize = (x) => this.s.containIntrinsicSize = x;
	Content = (x) => this.s.content = x;
	CounterIncrement = (x) => this.s.counterIncrement = x;
	ContentVisibility = (x) => this.s.contentVisibility = x;
	CounterReset = (x) => this.s.counterReset = x;
	CounterSet = (x) => this.s.counterSet = x;
	Cursor = (x) => this.s.cursor = x;
	Cx = (x) => this.s.cx = x;
	Cy = (x) => this.s.cy = x;

	D = (x) => this.s.d = x;
	DescentOverride = (x) => this.s.descentOverride = x;
	Direction = (x) => this.s.direction = x;
	Display = (x) => this.s.display = x;
	DominantBaseline = (x) => this.s.dominantBaseline = x;

	EmptyCells = (x) => this.s.emptyCells = x;
	EpubCaptionSide = (x) => this.s.epubCaptionSide = x;
	EpubTextCombine = (x) => this.s.epubTextCombine = x;
	EpubTextEmphasis = (x) => this.s.epubTextEmphasis = x;
	EpubTextEmphasisColor = (x) => this.s.epubTextEmphasisColor = x;
	EpubTextOrientation = (x) => this.s.epubTextOrientation = x;
	EpubTextTransform = (x) => this.s.epubTextTransform = x;
	EpubWordBreak = (x) => this.s.epubWordBreak = x;
	EpubWritingMode = (x) => this.s.epubWritingMode = x;

	Fill = (x) => this.s.fill = x;
	FillOpacity = (x) => this.s.fillOpacity = x;
	FillRule = (x) => this.s.fillRule = x;
	Filter = (x) => this.s.filter = x;
	Flex = (x) => this.s.flex = x;
	FlexBasis = (x) => this.s.flexBasis = x;
	FlexDirection = (x) => this.s.flexDirection = x;
	FlexFlow = (x) => this.s.flexFlow = x;
	FlexGrow = (x) => this.s.flexGrow = x;
	FlexWrap = (x) => this.s.flexWrap = x;
	Float = (x) => this.s.float = x;
	FloodColor = (x) => this.s.floodColor = x;
	FloodOpacity = (x) => this.s.floodOpacity = x;
	Font = (x) => this.s.font = x;
	FontDisplay = (x) => this.s.fontDisplay = x;
	FontFamily = (x) => this.s.fontFamily = x;
	FontFeatureSettings = (x) => this.s.fontFeatureSettings = x;
	FontKerning = (x) => this.s.fontKerning = x;
	FontOpticalSizing = (x) => this.s.fontOpticalSizing = x;
	FontSize = (x) => this.s.fontSize = x;
	FontStretch = (x) => this.s.fontStretch = x;
	FontStyle = (x) => this.s.fontStyle = x;
	FontVariant = (x) => this.s.fontVariant = x;
	FontVariantCaps = (x) => this.s.fontVariantCaps = x;
	FontVariantEastAsian = (x) => this.s.fontVariantEastAsian = x;
	FontVariantLigatures = (x) => this.s.fontVariantLigatures = x;
	FontVariantNumeric = (x) => this.s.fontVariantNumeric = x;
	FontVariationSetting = (x) => this.s.fontVariationSetting = x;
	FontWeight = (x) => this.s.fontWeight = x;
	ForcedColorAdjust = (x) => this.s.forcedColorAdjust = x;

	Gap = (x) => this.s.gap = x;
	Grid = (x) => this.s.grid = x;
	GridArea = (x) => this.s.gridArea = x;
	GridAutoColumns = (x) => this.s.gridAutoColumns = x;
	GridAutoFlow = (x) => this.s.gridAutoFlow = x;
	GridAutoRows = (x) => this.s.gridAutoRows = x;
	GridColumn = (x) => this.s.gridColumn = x;
	GridColumnEnd = (x) => this.s.gridColumnEnd = x;
	GridColumnGap = (x) => this.s.gridColumnGap = x;
	GridColumnStart = (x) => this.s.gridColumnStart = x;
	GridGap = (x) => this.s.gridGap = x;
	GridRow = (x) => this.s.gridRow = x;
	GridRowEnd = (x) => this.s.gridRowEnd = x;
	GridRowGap = (x) => this.s.gridRowGap = x;
	GridRowStart = (x) => this.s.gridRowStart = x;
	GridTemplate = (x) => this.s.gridTemplate = x;
	GridTemplateAreas = (x) => this.s.gridTemplateAreas = x;
	GridTemplateColumns = (x) => this.s.gridTemplateColumns = x;
	GridTemplateRows = (x) => this.s.gridTemplateRows = x;

	Height = (x) => this.s.height = x;
	Hyphens = (x) => this.s.hyphens = x;

	ImageOrientation = (x) => this.s.imageOrientation = x;
	ImageRendering = (x) => this.s.imageRendering = x;
	Inherits = (x) => this.s.inherits = x;
	InitialValue = (x) => this.s.initialValue = x;
	InlineSize = (x) => this.s.inlineSize = x;
	Inset = (x) => this.s.inset = x;
	InsetBlock = (x) => this.s.insetBlock = x;
	InsetBlockEnd = (x) => this.s.insetBlockEnd = x;
	InsetBlockStart = (x) => this.s.insetBlockStart = x;
	InsetInline = (x) => this.s.insetInline = x;
	InsetInlineEnd = (x) => this.s.insetInlineEnd = x;
	InsetInlineStart = (x) => this.s.insetInlineStart = x;
	Isolation = (x) => this.s.isolation = x;

	JustifyContent = (x) => this.s.justifyContent = x;
	JustifyItems = (x) => this.s.justifyItems = x;
	JustifySelf = (x) => this.s.justifySelf = x;

	Left = (x) => this.s.left = x;
	LetterSpacing = (x) => this.s.letterSpacing = x;
	LightingColor = (x) => this.s.lightingColor = x;
	LineBreak = (x) => this.s.lineBreak = x;
	LineGapOverride = (x) => this.s.lineGapOverride = x;
	LineHeight = (x) => this.s.lineHeight = x;
	ListStyle = (x) => this.s.listStyle = x;
	ListStyleImage = (x) => this.s.listStyleImage = x;
	ListStylePosition = (x) => this.s.listStylePosition = x;
	ListStyleType = (x) => this.s.listStyleType = x;

	Margin = (x) => this.s.margin = x;
	MarginBlock = (x) => this.s.marginBlock = x;
	MarginBlockEnd = (x) => this.s.marginBlockEnd = x;
	MarginBlockStart = (x) => this.s.marginBlockStart = x;
	MarginBottom = (x) => this.s.marginBottom = x;
	MarginInline = (x) => this.s.marginInline = x;
	MarginInlineEnd = (x) => this.s.marginInlineEnd = x;
	MarginInlineStart = (x) => this.s.marginInlineStart = x;
	MarginLeft = (x) => this.s.marginLeft = x;
	MarginRight = (x) => this.s.marginRight = x;
	MarginTop = (x) => this.s.marginTop = x;
	Marker = (x) => this.s.marker = x;
	MarkerEnd = (x) => this.s.markerEnd = x;
	MarkerMid = (x) => this.s.markerMid = x;
	MarkerStart = (x) => this.s.markerStart = x;
	Mask = (x) => this.s.mask = x;
	MaskType = (x) => this.s.maskType = x;
	MaxBlockSize = (x) => this.s.maxBlockSize = x;
	MaxHeight = (x) => this.s.maxHeight = x;
	MaxInlineSize = (x) => this.s.maxInlineSize = x;
	MaxWidth = (x) => this.s.maxWidth = x;
	MaxZoom = (x) => this.s.maxZoom = x;
	MinBlockSize = (x) => this.s.minBlockSize = x;
	MinHeight = (x) => this.s.minHeight = x;
	MinInlineSize = (x) => this.s.minInlineSize = x;
	MinWidth = (x) => this.s.minWidth = x;
	MinZoom = (x) => this.s.minZoom = x;
	MixBlendMode = (x) => this.s.mixBlendMode = x;

	ObjectFit = (x) => this.s.objectFit = x;
	ObjectPosition = (x) => this.s.objectPosition = x;
	Offset = (x) => this.s.offset = x;
	OffsetDistance = (x) => this.s.offsetDistance = x;
	OffsetPath = (x) => this.s.offsetPath = x;
	OffsetRotate = (x) => this.s.offsetRotate = x;
	Opacity = (x) => this.s.opacity = x;
	Order = (x) => this.s.order = x;
	Orientation = (x) => this.s.orientation = x;
	Orphans = (x) => this.s.orphans = x;
	Outline = (x) => this.s.outline = x;
	OutlineColor = (x) => this.s.outlineColor = x;
	OutlineOffset = (x) => this.s.outlineOffset = x;
	OutlineStyle = (x) => this.s.outlineStyle = x;
	OutlineWidth = (x) => this.s.outlineWidth = x;
	Overflow = (x) => this.s.overflow = x;
	OverflowAnchor = (x) => this.s.overflowAncho = x;
	OverflowClipMargin = (x) => this.s.overflowClipMargin = x;
	OverflowWrap = (x) => this.s.overflowWrap = x;
	OverflowX = (x) => this.s.overflowX = x;
	OverflowY = (x) => this.s.overflowY = x;
	OverscrollBehavior = (x) => this.s.overscrollBehavior = x;
	OverscrollBehaviorBlock = (x) => this.s.overscrollBehaviorBlock = x;
	OverscrollBehaviorInline = (x) => this.s.overscrollBehaviorInline = x;
	OverscrollBehaviorX = (x) => this.s.overscrollBehaviorX = x;
	OverscrollBehaviorY = (x) => this.s.overscrollBehaviorY = x;

	Padding = (x) => this.s.padding = x;
	PaddingBlock = (x) => this.s.paddingBlock = x;
	PaddingBlockEnd = (x) => this.s.paddingBlockEnd = x;
	PaddingBlockStart = (x) => this.s.paddingBlockStart = x;
	PaddingBottom = (x) => this.s.paddingBottom = x;
	PaddingInline = (x) => this.s.paddingInline = x;
	PaddingInlineEnd = (x) => this.s.paddingInlineEnd = x;
	PaddingInlineStart = (x) => this.s.paddingInlineStart = x;
	PaddingLeft = (x) => this.s.paddingLeft = x;
	PaddingRight = (x) => this.s.paddingRight = x;
	PaddingTop = (x) => this.s.paddingTop = x;
	Page = (x) => this.s.page = x;
	PageBreakAfter = (x) => this.s.pageBreakAfter = x;
	PageBreakBefore = (x) => this.s.pageBreakBefore = x;
	PageBreakInside = (x) => this.s.pageBreakInside = x;
	PageOrientation = (x) => this.s.pageOrientation = x;
	PaintOrder = (x) => this.s.paintOrder = x;
	Perspective = (x) => this.s.perspective = x;
	PerspectiveOrigin = (x) => this.s.perspectiveOrigin = x;
	PlaceContent = (x) => this.s.placeContent = x;
	PlaceItems = (x) => this.s.placeItems = x;
	PlaceSelf = (x) => this.s.placeSelf = x;
	PointerEvents = (x) => this.s.pointerEvents = x;
	Position = (x) => this.s.position = x;
	Quotes = (x) => this.s.quotes = x;

	R = (x) => this.s.r = x;
	Resize = (x) => this.s.resize = x;
	Right = (x) => this.s.right = x;
	RowGap = (x) => this.s.rowGap = x;
	RubyPosition = (x) => this.s.rubyPosition = x;
	Rx = (x) => this.s.rx = x;
	Ry = (x) => this.s.ry = x;

	ScrollBehavior = (x) => this.s.scrollBehavior = x;
	ScrollMargin = (x) => this.s.scrollMargin = x;
	ScrollMarginBlock = (x) => this.s.scrollMarginBlock = x;
	ScrollMarginBlockEnd = (x) => this.s.scrollMarginBlockEnd = x;
	ScrollMarginBlockStart = (x) => this.s.scrollMarginBlockstart = x;
	ScrollMarginBottom = (x) => this.s.scrollMarginBottom = x;
	ScrollMarginInline = (x) => this.s.scrollMarginInline = x;
	ScrollMarginInlineEnd = (x) => this.s.scrollMarginInlineEnd = x;
	ScrollMarginInlineStart = (x) => this.s.scrollmarginInlineStart = x;
	ScrollMarginLeft = (x) => this.s.scrollMarginLeft = x;
	ScrollMarginRight = (x) => this.s.scrollMarginRight = x;
	ScrollMarginTop = (x) => this.s.scrollMarginTop = x;
	ScrollPadding = (x) => this.s.scrollPadding = x;
	ScrollPaddingBlock = (x) => this.s.scrollPaddingBlock = x;
	ScrollPaddingBlockEnd = (x) => this.s.scrollPaddingBlockEnd = x;
	ScrollPaddingBlockStart = (x) => this.s.scrollPaddingBlockStart = x;
	ScrollPaddingBottom = (x) => this.s.scrollPaddingBottom = x;
	ScrollPaddingInline = (x) => this.s.scrollPaddingInline = x;
	ScrollPaddingInlineEnd = (x) => this.s.scrollPaddingInlineEnd = x;
	ScrollPaddingInlineStart = (x) => this.s.scrollPaddingInlineStart = x;
	ScrollPaddingLeft = (x) => this.s.scrollPaddingLeft = x;
	ScrollPaddingRight = (x) => this.s.scrollPaddingRight = x;
	ScrollPaddingTop = (x) => this.s.scrollPaddingTop = x;
	ScrollSnapAlign = (x) => this.s.scrollSnapAlign = x;
	ScrollSnapStop = (x) => this.s.scrollSnapStop = x;
	ScrollSnapType = (x) => this.s.scrollSnapType = x;
	ShapeImageThreshold = (x) => this.s.shapeImaheThreshold = x;
	ShapeMargin = (x) => this.s.shapeMargin = x;
	ShapeOutside = (x) => this.s.shapeOutside = x;
	ShapeRendering = (x) => this.s.shapeRendering = x;
	Size = (x) => this.s.size = x;
	Speak = (x) => this.s.speak = x;
	Src = (x) => this.s.src = x;
	StopColor = (x) => this.s.stopColor = x;
	StopOpacity = (x) => this.s.stopOpacity = x;
	Stroke = (x) => this.s.stroke = x;
	StrokeDasharray = (x) => this.s.strokeDasharray = x;
	StrokeDashoffset = (x) => this.s.strokeDashoffset = x;
	StrokeLinecap = (x) => this.s.strokeLinecap = x;
	StrokeLinejoin = (x) => this.s.strokeLinejoin = x;
	StrokeMiterlimit = (x) => this.s.strokeMiterlimit = x;
	StrokeOpacity = (x) => this.s.strokeOpacity = x;
	StrokeWidth = (x) => this.s.strokeWidth = x;
	Syntax = (x) => this.s.syntax = x;

	TabSize = (x) => this.s.tabSize = x;
	TableLayout = (x) => this.s.tableLayout = x;
	TextAlign = (x) => this.s.textAlign = x;
	TextAlignLast = (x) => this.s.textAlignLast = x;
	TextAnchor = (x) => this.s.textAnchor = x;
	TextCombinedUpright = (x) => this.s.textCombinedUpright = x;
	TextDecoration = (x) => this.s.textDecoration = x;
	TextDecorationColor = (x) => this.s.textDecorationColor = x;
	TextDecorationLine = (x) => this.s.textDecorationLine = x;
	TextDecorationSkipInk = (x) => this.s.textDecorationSkipInk = x;
	TextDecorationStyle = (x) => this.s.textDecorationStyle = x;
	TextDecorationThickness = (x) => this.s.textDecorationThickness = x;
	TextIndent = (x) => this.s.textIndent = x;
	TextOrientation = (x) => this.s.textOrientation = x;
	TextOverflow = (x) => this.s.textOverflow = x;
	TextRendering = (x) => this.s.textRendering = x;
	TextShadow = (x) => this.s.textShadow = x;
	TextSizeAdjust = (x) => this.s.textSizeAdjust = x;
	TextTransform = (x) => this.s.textTransform = x;
	TextUnderlineOffset = (x) => this.s.textUnderlineOffset = x;
	TextUnderlinePosition = (x) => this.s.textUnderlinePosition = x;
	Top = (x) => this.s.top = x;
	TouchAction = (x) => this.s.touchAction = x;
	Transform = (x) => this.s.transform = x;
	TransformBox = (x) => this.s.transformBox = x;
	TransformOrigin = (x) => this.s.transformOrigin = x;
	TransformStyle = (x) => this.s.trasnformStyle = x;
	Transition = (x) => this.s.transition = x;
	TransitionDelay = (x) => this.s.transitionDelay = x;
	TransitionDuration = (x) => this.s.transitionDuration = x;
	TransitionProperty = (x) => this.s.transitionProperty = x;
	TransitionTimingFunction = (x) => this.s.transitionTimingFunction = x;

	UnicodeBidi = (x) => this.s.unicodeBidi = x;
	UnicodeRange = (x) => this.s.unicodeRange = x;
	UserSelect = (x) => this.s.userSelect = x;
	UserZoom = (x) => this.s.userZoom = x;

	VectorEffect = (x) => this.s.vectorEffect = x;
	VerticalAlign = (x) => this.s.verticalAlign = x;
	Visibility = (x) => this.s.visibility = x;

	Width = (x) => this.s.width = x;
	Widows = (x) => this.s.widows = x;
	WillChange = (x) => this.s.willChange = x;
	WordBreak = (x) => this.s.wordBreak = x;
	WordSpacing = (x) => this.s.wordSpacing = x;
	WordWrap = (x) => this.s.wordWrap = x;
	WritingMode = (x) => this.s.writingMode = x;

	X = (x) => this.s.x = x;

	Y = (x) => this.s.y = x;

	Zindex = (x) => this.s.zIndex = x;
	Zoom = (x) => this.s.zoom = x;

	InsertATag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('a', a, b)));
	InsertAbbrTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('abbr', a, b)));
	InsertAcronymTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('acronym', a, b)));
	InsertAddressTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('address', a, b)));
	InsertAppletTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('applet', a, b)));
	InsertAreaTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('area', a, b)));
	InsertArticleTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('article', a, b)));
	InsertAsideTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('aside', a, b)));
	InsertAudioTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('audio', a, b)));

	InsertBTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('b', a, b)));
	InsertBaseTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('base', a, b)));
	InsertBaseFontTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('basefont', a, b)));
	InsertBbTag = (a, attribbutes = []) => $(Dom.CheckNodeID(this.CreateNode('bb', a, b)));
	InsertBdoTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('bdo', a, b)));
	InsertBigTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('big', a, b)));
	InsertBlockQuoteTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('blockquote', a, b)));
	InsertBodyTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('body', a, b)));
	InsertBrTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('br', a, b)));
	InsertButtonTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('button', a, b)));

	InsertCanvasTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('canvas', a, b)));
	InsertCaptionTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('caption', a, b)));
	InsertCenterTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('center', a, b)));
	InsertCiteTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('cite', a, b)));
	InsertCodeTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('code', a, b)));
	InsertColTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('col', a, b)));
	InsertColGroupTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('colgroup', a, b)));
	InsertCommandTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('command', a, b)));

	InsertDataGridTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('datagrid', a, b)));
	InsertDataListTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('datalist', a, b)));
	InsertDdTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('dd', a, b)));
	InsertDelTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('del', a, b)));
	InsertDetailsTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('details', a, b)));
	InsertDfnTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('dfn', a, b)));
	InsertDialogTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('dialog', a, b)));
	InsertDirTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('dir', a, b)));
	InsertDivTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('div', a, b)));
	InsertDlTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('dl', a, b)));
	InsertDtTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('dt', a, b)));

	InsertEmTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('em', a, b)));
	InsertEmbedTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('embed', a, b)));
	InsertEventSourceTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('eventsource', a, b)));

	InsertFieldsetTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('fieldset', a, b)));
	InsertFigcaptionTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('figcaption', a, b)));
	InsertFigureTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('figure', a, b)));
	InsertFontTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('font', a, b)));
	InsertFooterTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('footer', a, b)));
	InsertFormTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('form', a, b)));
	InsertFrameTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('frame', a, b)));
	InsertFrameSetTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('frameset', a, b)));

	InsertH1Tag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('h1', a, b)));
	InsertH2Tag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('h2', a, b)));
	InsertH3Tag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('h3', a, b)));
	InsertH4Tag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('h4', a, b)));
	InsertH5Tag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('h5', a, b)));
	InsertH6Tag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('h6', a, b)));
	InsertHeadTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('head', a, b)));
	InsertHeaderTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('header', a, b)));
	InsertHgroupTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('hgroup', a, b)));
	InsertHrTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('hr', a, b)));
	InsertHtmlTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('html', a, b)));

	InsertITag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('i', a, b)));
	InsertIframeTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('iframe', a, b)));
	InsertImgTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('img', a, b)));
	InsertInputTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('input', a, b)));
	InsertInsTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('ins', a, b)));
	InsertIsIndexTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('isindex', a, b)));

	InsertKbdTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('kbd', a, b)));
	InsertKeygenTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('keygen', a, b)));

	InsertLabelTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('label', a, b)));
	InsertLegendTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('legend', a, b)));
	InsertLiTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('li', a, b)));
	InsertLinkTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('link', a, b)));

	InsertMapTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('map', a, b)));
	InsertMarkTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('mark', a, b)));
	InsertMenuTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('menu', a, b)));
	InsertMetaTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('meta', a, b)));
	InsertMeterTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('meter', a, b)));

	InsertNavTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('nav', a, b)));
	InsertNoFramesTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('noframes', a, b)));
	InsertNoScriptTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('noscript', a, b)));

	InsertObjectTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('object', a, b)));
	InsertOlTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('ol', a, b)));
	InsertOptGroupTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('optgroup', a, b)));
	InsertOptionTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('option', a, b)));
	InsertOutputTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('output', a, b)));

	InsertPTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('p', a, b)));
	InsertParamTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('param', a, b)));
	InsertPreTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('pre', a, b)));
	InsertProgressTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('progress', a, b)));

	InsertQTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('q', a, b)));

	InsertRpTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('rp', a, b)));
	InsertRtTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('rt', a, b)));
	InsertRubyTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('ruby', a, b)));

	InsertSTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('s', a, b)));
	InsertSampTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('samp', a, b)));
	InsertScriptTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('script', a, b)));
	InsertSectionTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('section', a, b)));
	InsertSelectTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('select', a, b)));
	InsertSmallTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('small', a, b)));
	InsertSourceTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('source', a, b)));
	InsertSpanTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('span', a, b)));
	InsertStrikeTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('strike', a, b)));
	InsertStrongTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('strong', a, b)));
	InsertStyleTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('style', a, b)));
	InsertSubTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('sub', a, b)));
	InsertSupTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('sup', a, b)));

	InsertTableTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('table', a, b)));
	InsertTbodyTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('tbody', a, b)));
	InsertTdTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('td', a, b)));
	InsertTextAreaTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('textarea', a, b)));
	InsertTfootTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('tfoot', a, b)));
	InsertThTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('th', a, b)));
	InsertTheadTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('thead', a, b)));
	InsertTimeTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('time', a, b)));
	InsertTitleTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('title', a, b)));
	InsertTrTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('tr', a, b)));
	InsertTrackTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('track', a, b)));
	InsertTtTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('tt', a, b)));

	InsertUTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('u', a, b)));
	InsertUlTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('ul', a, b)));

	InsertVarTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('var', a, b)));
	InsertVideoTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('video', a, b)));

	InsertWbrTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('wbr', a, b)));

	InsertMainTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('main', a, b)));
	InsertMenuItemTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('menuitem', a, b)));

	InsertDataListTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('datalist', a, b)));
	InsertDataTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('data', a, b)));

	InsertRtcTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('rtc', a, b)));
	InsertSummaryTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('summary', a, b)));
	InsertTemplateTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('template', a, b)));
	InsertVideoTag = (a, b = []) => $(Dom.CheckNodeID(this.CreateNode('video', a, b)));

	AddClass = (x) => this.e.classList.add(x);
	RemoveClass = (x) => this.e.classList.remove(x);
	ContainClass = (x) => this.e.classList.contains(x);
	SetHTML = (x) => this.e.innerHTML = x;
	AddHTML = (x) => this.e.innerHTML += x;
	GetNodes = () => this.e.childNodes();
	HasAttribute = (x) => this.e.hasAttribute(x);
	SetAttribute = (a, b = '') => this.e.setAttribute(a, b)
	GetAttribute = (x) => this.e.getAttribute(x);
	ClearContent = () => (!this.e.hasAttribute('immutable')) ? this.e.innerHTML = '' : raise('You are trying clear content a immutable element.');
	HasAttributes = () => this.e.hasAttributes();
	GetAttributes = () => this.e.getAttributeNames();
	RemoveAttribute = (x) => this.e.removeAttribute(x);
	AddElement = (x) => this.e.appendChild(x);
	InsertAdjacentElement = (option, element) => this.e.insertAdjacentElement(option.toLowerCase(), element);
	InsertAdjacentHTML = (option, html) => this.e.insertAdjacentHTML(option.toLowerCase(), html);
	InsertAdjacentText = (option, text) => this.e.insertAdjacentText(option.toLowerCase(), text);
	InsertBefore = (new_node, node) => this.e.insertBefore(node, new_node);
	GetLength = () => this.e.length;
	RemoveChild = (node) => this.e.removeChild(node);
	ReplaceChild = (new_node, old_node) => this.e.replaceChild(new_node, old_node);
	CloneElement = (clone_childs = true) => this.e.cloneNode(clone_childs);
	GetID = () => this.e.id;
	AddClassList = (x) => this.e.className = x;
	RemoveAllClass = () => this.e.className = '';
	GetClasses = () => this.e.className;
	GetInlineStyles = () => this.s;
	AddClassToggle = (x) => this.e.classList.toggle(x);
	AddClassByExpresion = (stylesheet_class, expresion) => this.e.classList.toggle(stylesheet_class, expresion);
	ReplaceClass = (old_class, new_class) => this.e.classList.replace(old_class, new_class);
	GetInstance = () => this.e;
	AddText = (x) => this.e.textContent = x;
	AddEventListener = (listen, action) => this.e.addEventListener(listen, action);
	GetText = () => this.e.textContent;
	GetContent = () => this.e.innerHTML;
	OuterHTML = () => this.e.outerHTML;
	GetChildren = () => this.e.children;
	GetParent = () => this.e.parentElement;
	FirstChildren = () => this.e.firstElementChild;
	LastChildren = () => this.e.lastElementChild;
	PreviousNode = () => this.e.previousSibling();
	NextNode = () => this.e.nextSibling();
	Remove = () => this.e.remove();
	GetStyles = (style_property = false) => (style_property) ? getComputedStyle(this.e)[style_property] : getComputedStyle(this.e);
	GetStyleInstance = () => this.s;
	NodeName = () => this.e.nodeName;
	GetType = () => this.e.type;
	SetTimeout = (x, time = 1000) => setTimeout(x(), time);
	SetInterval = (x, time = 1000) => setInterval(x(), time);
	IsDraggable = () => this.e.draggable;
	IsEditable = () => this.e.isContentEditable;

	Styles = (properties) => {
		let i = 0,
			keys = Object.keys(properties);
		for (i; i < keys.length; i++) {

			let key = keys[i].toLowerCase(),
				x = properties[keys[i]];

			switch (key) {
				case 'aligncontent':
					this.AlignContent(x);
					break;
				case 'alignitems':
					this.AlignItems(x);
					break;
				case 'alignmentbaseline':
					this.AlignmentBaseLine(x);
					break;
				case 'all':
					this.All(x);
					break;
				case 'animation':
					this.Animation(x);
					break;
				case 'animationdelay':
					this.AnimationDelay(x);
					break;
				case 'animationdirection':
					this.AnimationDirection(x);
					break;
				case 'animationfillmode':
					this.AnimationFillMode(x);
					break;
				case 'animationiterationcount':
					this.AnimationIterationCount(x);
					break;
				case 'animationame':
					this.AnimationName(x);
					break;
				case 'animationplaystate':
					this.AnimationPlayState(x);
					break;
				case 'animationtimingfunction':
					this.AnimationTimingFunction(x);
					break;
				case 'appearance':
					this.Appearance(x);
					break;
				case 'ascentoverride':
					this.AscentOverride(x);
					break;
				case 'aspectratio':
					this.AspectRatio(x);
					break;

				case 'backdropfilter':
					this.BackdropFilter(x);
					break;
				case 'backfacevisibility':
					this.BackfaceVisibility(x);
					break;
				case 'background':
					this.Background(x);
					break;
				case 'backgroundattachment':
					this.BackgroundAttachment(x);
					break;
				case 'backgroundblendmode':
					this.BackgroundBlendMode(x);
					break;
				case 'backgroundclip':
					this.BackgroundClip(x);
					break;
				case 'backgroundcolor':
					this.BackgroundColor(x);
					break;
				case 'backgroundimage':
					this.BackgroundImage(x);
					break;
				case 'backgroundorigin':
					this.BackgroundOrigin(x);
					break;
				case 'backgroundposition':
					this.BackgroundPosition(x);
					break;
				case 'backgroundpositiony':
					this.BackgroundPositionX(x);
					break;
				case 'backgroundpositiony':
					this.BackgroundPositionY(x);
					break;
				case 'backgroundrepeat':
					this.BackgroundRepeat(x);
					break;
				case 'backgroundrepeatx':
					this.BackgroundRepeatX(x);
					break;
				case 'backgroundrepeaty':
					this.BackgroundRepeatY(x);
					break;
				case 'backgroundsize':
					this.BackgroundSize(x);
					break;
				case 'baselineshift':
					this.BaselineShift(x);
					break;
				case 'blocksize':
					this.BlockSize(x);
					break;
				case 'border':
					this.Border(x);
					break;
				case 'borderblock':
					this.BorderBlock(x);
					break;
				case 'borderblockcolor':
					this.BorderBlockColor(x);
					break;
				case 'borderblockend':
					this.BorderBlockEnd(x);
					break;
				case 'borderblockendcolor':
					this.BorderBlockEndColor(x);
					break;
				case 'borderblockendwidth':
					this.BorderBlockEndWidth(x);
					break;
				case 'borderblockstart':
					this.BorderBlockStart(x);
					break;
				case 'borderblockstartcolor':
					this.BorderBlockStartColor(x);
					break;
				case 'borderblockstartstyle':
					this.BorderBlockStartStyle(x);
					break;
				case 'borderblockstartwidth':
					this.BorderBlockStartWidth(x);
					break;
				case 'borderblockstyle':
					this.BorderBlockStyle(x);
					break;
				case 'borderblockwidth':
					this.BorderBlockWidth(x);
					break;
				case 'borderbottom':
					this.BorderBottom(x);
					break;
				case 'borderbottomcolor':
					this.BorderBottomColor(x);
					break;
				case 'borderbottomleftradius':
					this.BorderBottomLeftRadius(x);
					break;
				case 'borderbottomrightradius':
					this.BorderBottomRightRadius(x);
					break;
				case 'borderbottomstyle':
					this.BorderBottomStyle(x);
					break;
				case 'borderbottomwidth':
					this.BorderBottomWidth(x);
					break;
				case 'bordercollapse':
					this.BorderCollapse(x);
					break;
				case 'bordercolor':
					this.BorderColor(x);
					break;
				case 'borderendendradius':
					this.BorderEndEndRadius(x);
					break;
				case 'borderendstartradius':
					this.BorderEndStartRadius(x);
					break;
				case 'borderimage':
					this.BorderImage(x);
					break;
				case 'borderimageoutset':
					this.BorderImageOutset(x);
					break;
				case 'borderimagerepeat':
					this.BorderImageRepeat(x);
					break;
				case 'borderimagesource':
					this.BorderImageSource(x);
					break;
				case 'borderimagewidth':
					this.BorderImageWidth(x);
					break;
				case 'borderinline':
					this.BorderInline(x);
					break;
				case 'borderinlinecolor':
					this.BorderInlineColor(x);
					break;
				case 'borderinlineend':
					this.BorderInlineEnd(x);
					break;
				case 'borderinlineendcolor':
					this.BorderInlineEndColor(x);
					break;
				case 'borderinlineendstyle':
					this.BorderInlineEndStyle(x);
					break;
				case 'borderinlinewidth':
					this.BorderInlineWidth(x);
					break;
				case 'borderinlinestart':
					this.BorderInlineStart(x);
					break;
				case 'borderinlinestartcolor':
					this.BorderInlineStartColor(x);
					break;
				case 'borderinlinestartstyle':
					this.BorderInlineStartStyle(x);
					break;
				case 'borderinlinestartwidth':
					this.BorderInlineStartWidth(x);
					break;
				case 'borderinlinestyle':
					this.BorderInline(x);
					break;
				case 'borderinlinewidth':
					this.BorderInlineWidth(x);
					break;
				case 'borderleft':
					this.BorderLeft(x);
					break;
				case 'borderleftcolor':
					this.BorderLeftColor(x);
					break;
				case 'borderleftstyle':
					this.BorderLeftStyle(x);
					break;
				case 'borderleftwidth':
					this.BorderLeftWidth(x);
					break;
				case 'borderradius':
					this.BorderRadius(x);
					break;
				case 'borderright':
					this.BorderRight(x);
					break;
				case 'borderrightcolor':
					this.BorderRightColor(x);
					break;
				case 'borderrightstyle':
					this.BorderRightStyle(x);
					break;
				case 'borderrightwidth':
					this.BorderRightWidth(x);
					break;
				case 'borderspacing':
					this.BorderSpacing(x);
					break;
				case 'borderstartendradius':
					this.BorderStartEndRadius(x);
					break;
				case 'borderstartstartradius':
					this.BorderStartStartRadius(x);
					break;
				case 'borderstyle':
					this.BorderStyle(x);
					break;
				case 'bordertop':
					this.BorderTop(x);
					break;
				case 'bordertopcolor':
					this.BorderTopColor(x);
					break;
				case 'bordertopleftradius':
					this.BorderTopLeftRadius(x);
					break;
				case 'bordertoprightradius':
					this.BorderTopRightRadius(x);
					break;
				case 'bordertopstyle':
					this.BorderTopStyle(x);
					break;
				case 'bordertopwidth':
					this.BorderTopWidth(x);
					break;
				case 'borderwidth':
					this.BorderWidth(x);
					break;
				case 'borderbottom':
					this.BorderBottom(x);
					break;
				case 'boxshadow':
					this.BoxShadow(x);
					break;
				case 'boxsizing':
					this.BoxSizing(x);
					break;
				case 'breakafter':
					this.BreakAfter(x);
					break;
				case 'breakbefore':
					this.BreakBefore(x);
					break;
				case 'breakinside':
					this.BreakInside(x);
					break;
				case 'bufferedrendering':
					this.BufferedRendering(x);
					break;

				case 'captionside':
					this.CaptionSide(x);
					break;
				case 'caretcolor':
					this.CaretColor(x);
					break;
				case 'clear':
					this.Clear(x);
					break;
				case 'clip':
					this.Clip(x);
					break;
				case 'clippath':
					this.ClipPath(x);
					break;
				case 'cliprule':
					this.ClipRule(x);
					break;
				case 'color':
					this.Color(x);
					break;
				case 'colorinterpolation':
					this.ColorInterpolation(x);
					break;
				case 'colorinterpolationfilters':
					this.ColorInterpolationFilters(x);
					break;
				case 'colorrendering':
					this.ColorRendering(x);
					break;
				case 'colorscheme':
					this.ColorScheme(x);
					break;
				case 'columncount':
					this.ColumnCount(x);
					break;
				case 'columnfill':
					this.ColumnFill(x);
					break;
				case 'columngap':
					this.ColumnGap(x);
					break;
				case 'columnrule':
					this.ColumnRule(x);
					break;
				case 'columnrulecolor':
					this.ColumnRuleColor(x);
					break;
				case 'columnrulestyle':
					this.ColumnRuleStyle(x);
					break;
				case 'columnRuleWidth':
					this.ColumnRuleWidth(x);
					break;
				case 'columnspan':
					this.ColumnSpan(x);
					break;
				case 'columnwidth':
					this.ColumnWidth(x);
					break;
				case 'columns':
					this.Columns(x);
					break;
				case 'contain':
					this.Contain(x);
					break;
				case 'containintrinsicsize':
					this.ContainIntrinsicSize(x);
					break;
				case 'content':
					this.Content(x);
					break;
				case 'contentvisibility':
					this.ContentVisibility(x);
					break;
				case 'counterincrement':
					this.CounterIncrement(x);
					break;
				case 'counterreset':
					this.CounterReset(x);
					break;
				case 'counterset':
					this.CounterSet(x);
					break;
				case 'cursor':
					this.Cursor(x);
					break;
				case 'cx':
					this.Cx(x);
					break;
				case 'cy':
					this.Cy(x);
					break;
				case 'd':
					this.D(x);
					break;

				case 'descentoverride':
					this.DescentOverride(x);
					break;
				case 'direction':
					this.Direction(x);
					break;
				case 'display':
					this.Display(x);
					break;
				case 'dominanbaseline':
					this.DominantBaseline(x);
					break;
				case 'emptycells':
					this.EmptyCells(x);
					break;

				case 'epubcaptionside':
					this.EpubCaptionSide(x);
					break;
				case 'epubtextcombine':
					this.EpubTextCombine(x);
					break;
				case 'epubtextemphasis':
					this.EpubTextEmphasis(x);
					break;
				case 'epubtextemphasiscolor':
					this.EpubTextEmphasisColor(x);
					break;
				case 'epubtextorientation':
					this.EpubTextOrientation(x);
					break;
				case 'epubtexttransform':
					this.EpubTextTransform(x);
					break;
				case 'epubwordbreak':
					this.EpubWordBreak(x);
					break;
				case 'epubwritingmode':
					this.EpubWritingMode(x);
					break;

				case 'fill':
					this.Fill(x);
					break;
				case 'fillopacity':
					this.FillOpacity(x);
					break;
				case 'fillrule':
					this.FillRule(x);
					break;
				case 'filter':
					this.Filter(x);
					break;
				case 'flex':
					this.Flex(x);
					break;
				case 'flexbasis':
					this.FlexBasis(x);
					break;
				case 'flexdirection':
					this.FlexDirection(x);
					break;
				case 'flexflow':
					this.FlexFlow(x);
					break;
				case 'flexgrow':
					this.FlexGrow(x);
					break;
				case 'flexwrap':
					this.FlexWrap(x);
					break;
				case 'float':
					this.Float(x);
					break;
				case 'floodcolor':
					this.FloodColor(x);
					break;
				case 'floodopacity':
					this.FloodOpacity(x);
					break;
				case 'font':
					this.Font(x);
					break;
				case 'fontdisplay':
					this.FontDisplay(x);
					break;
				case 'fontfamily':
					this.FontFamily(x);
					break;
				case 'fontfeaturesettings':
					this.FontFeatureSettings(x);
					break;
				case 'fontkerning':
					this.FontKerning(x);
					break;
				case 'fontopticalsizing':
					this.FontOpticalSizing(x);
					break;
				case 'fontsize':
					this.FontSize(x);
					break;
				case 'fontstretch':
					this.FontStretch(x);
					break;
				case 'fontstyle':
					this.FontStyle(x);
					break;
				case 'fontvariant':
					this.FontVariant(x);
					break;
				case 'fontvariantcaps':
					this.FontVariantCaps(x);
					break;
				case 'fontvarianteastasian':
					this.FontVariantEastAsian(x);
					break;
				case 'fontvariantligatures':
					this.FontVariantLigatures(x);
					break;
				case 'fontvariantnumeric':
					this.FontVariantNumeric(x);
					break;
				case 'fontvariationsetting':
					this.FontVariationSetting(x);
					break;
				case 'fontweight':
					this.FontWeight(x);
					break;
				case 'forcedcoloradjust':
					this.ForcedColorAdjust(x);
					break;

				case 'gap':
					this.Gap(x);
					break;
				case 'grid':
					this.Grid(x);
					break;
				case 'gridarea':
					this.GridArea(x);
					break;
				case 'gridautocolumns':
					this.GridAutoColumns(x);
					break;
				case 'gridautoflow':
					this.GridAutoFlow(x);
					break;
				case 'gridautorows':
					this.GridAutoRows(x);
					break;
				case 'gridcolumn':
					this.GridColumn(x);
					break;
				case 'gridcolumnend':
					this.GridColumnEnd(x);
					break;
				case 'gridcolumngap':
					this.GridColumnGap(x);
					break;
				case 'gridcolumnstart':
					this.GridColumnStart(x);
					break;
				case 'gridgap':
					this.GridGap(x);
					break;
				case 'gridrow':
					this.GridRow(x);
					break;
				case 'gridrowend':
					this.GridRowEnd(x);
					break;
				case 'gridrowgap':
					this.GridRowGap(x);
					break;
				case 'gridrowstart':
					this.GridRowStart(x);
					break;
				case 'gridtemplate':
					this.GridTemplate(x);
					break;
				case 'gridtemplateareas':
					this.GridTemplateAreas(x);
					break;
				case 'gridtemplatecolumns':
					this.GridTemplateColumns(x);
					break;
				case 'gridtemplaterows':
					this.GridTemplateRows(x);
					break;

				case 'height':
					this.Height(x);
					break;
				case 'hyphens':
					this.Hyphens(x);
					break;

				case 'imageorientation':
					this.ImageOrientation(x);
					break;
				case 'imagerendering':
					this.ImageRendering(x);
					break;
				case 'inherits':
					this.Inherits(x);
					break;
				case 'initialvalue':
					this.InitialValue(x);
					break;
				case 'inlinesize':
					this.InlineSize(x);
					break;
				case 'inset':
					this.Inset(x);
					break;
				case 'insetblock':
					this.InsetBlock(x);
					break;
				case 'insetblockend':
					this.InsetBlockEnd(x);
					break;
				case 'insetblockstart':
					this.InsetBlockStart(x);
					break;
				case 'insetinline':
					this.InsetInline(x);
					break;
				case 'insetinlineend':
					this.InsetInlineEnd(x);
					break;
				case 'insetinlinestart':
					this.InsetInlineStart(x);
					break;
				case 'isolation':
					this.Isolation(x);
					break;
				case 'justifycontent':
					this.JustifyContent(x);
					break;
				case 'justifyitems':
					this.JustifyItems(x);
					break;
				case 'justifyself':
					this.JustifySelf(x);
					break;
				case 'left':
					this.Left(x);
					break;
				case 'letterspacing':
					this.LetterSpacing(x);
					break;
				case 'lightingcolor':
					this.LightingColor(x);
					break;
				case 'linebreak':
					this.LineBreak(x);
					break;
				case 'linegapoverride':
					this.LineGapOverride(x);
					break;
				case 'lineheight':
					this.LineHeight(x);
					break;
				case 'liststyle':
					this.ListStyle(x);
					break;
				case 'liststyleimage':
					this.ListStyleImage(x);
					break;
				case 'liststyleposition':
					this.ListStylePosition(x);
					break;
				case 'liststyletype':
					this.ListStyleTYpe(x);
					break;

				case 'margin':
					this.Margin(x);
					break;
				case 'marginblock':
					this.MarginBlock(x);
					break;
				case 'marginblockend':
					this.MarginBlockEnd(x);
					break;
				case 'marginblockstart':
					this.MarginBlockStart(x);
					break;
				case 'marginbottom':
					this.MarginBottom(x);
					break;
				case 'margininline':
					this.MarginInline(x);
					break;
				case 'margininlinestart':
					this.MarginInlineStart(x);
					break;
				case 'margininlineend':
					this.MarginInlineEnd(x);
					break;
				case 'marginright':
					this.MarginRight(x);
					break;
				case 'margintop':
					this.MarginTop(x);
					break;
				case 'marker':
					this.Marker(x);
					break;
				case 'markerend':
					this.MarkerEnd(x);
					break;
				case 'markermid':
					this.MarkerMid(x);
					break;
				case 'markerstart':
					this.MarkerStart(x);
					break;
				case 'mask':
					this.Mask(x);
					break;
				case 'masktype':
					this.MaskType(x);
					break;
				case 'maxblocksize':
					this.MaxBlockSize(x);
					break;
				case 'maxheight':
					this.MaxHeight(x);
					break;
				case 'maxinlinesize':
					this.MaxInlineSize(x);
					break;
				case 'maxwidth':
					this.MaxWidth(x);
					break;
				case 'maxzoom':
					this.MaxZoom(x);
					break;
				case 'minblocksize':
					this.MinBlockSize(x);
					break;
				case 'minheight':
					this.MinHeight(x);
					break;
				case 'mininlinesize':
					this.MinInlineSize(x);
					break;
				case 'minwidth':
					this.MinWidth(x);
					break;
				case 'minzoom':
					this.MinZoom(x);
					break;
				case 'minblocksize':
					this.MinBlockSize(x);
					break;
				case 'minheight':
					this.MinHeight(x);
					break;
				case 'mixblendmode':
					this.MixBlendMode(x);
					break;

				case 'objectfit':
					this.ObjectFit(x);
					break;
				case 'objectposition':
					this.ObjectPosition(x);
					break;
				case 'offset':
					this.Offset(x);
					break;
				case 'offsetdistance':
					this.OffsetDistance(x);
					break;
				case 'offsetpath':
					this.OffsetPath(x);
					break;
				case 'offsetrotate':
					this.OffsetRotate(x);
					break;
				case 'opacity':
					this.Opacity(x);
					break;
				case 'order':
					this.Order(x);
					break;
				case 'orientation':
					this.Orientation(x);
					break;
				case 'orphans':
					this.Orphans(x);
					break;
				case 'outline':
					this.Outline(x);
					break;
				case 'outlinecolor':
					this.OutlineColor(x);
					break;
				case 'outlineoffset':
					this.OutlineOffset(x);
					break;
				case 'outlinestyle':
					this.OutlineStyle(x);
					break;
				case 'outlinewidth':
					this.OutlineWidth(x);
					break;
				case 'overflow':
					this.Overflow(x);
					break;
				case 'overflowanchor':
					this.OverflowAnchor(x);
					break;
				case 'overflowclipmargin':
					this.OverflowClipMargin(x);
					break;
				case 'overflowwrap':
					this.OverflowWrap(x);
					break;
				case 'overflowx':
					this.OverflowX(x);
					break;
				case 'overflowy':
					this.OverflowY(x);
					break;
				case 'overscrollbehavior':
					this.OverscrollBehavior(x);
					break;
				case 'overscrollbehaviorblock':
					this.OverscrollBehaviorBlock(x);
					break;
				case 'overscrollbehaviorinline':
					this.OverscrollBehaviorInline(x);
					break;
				case 'overscrollbehaviorx':
					this.OverscrollBehaviorX(x);
					break;
				case 'overscrollbehaviory':
					this.OverscrollBehaviorY(x);
					break;

				case 'padding':
					this.Padding(x);
					break;
				case 'paddingblock':
					this.PaddingBlock(x);
					break;
				case 'paddingblockend':
					this.PaddingBlockEnd(x);
					break;
				case 'paddingblockstart':
					this.PaddingBlockStart(x);
					break;
				case 'paddingbottom':
					this.PaddingBottom(x);
					break;
				case 'paddinginline':
					this.PaddingInline(x);
					break;
				case 'paddinginlineend':
					this.PaddingInlineEnd(x);
					break;
				case 'paddinginlinestart':
					this.PaddingInlineStart(x);
					break;
				case 'paddingleft':
					this.PaddingLeft(x);
					break;
				case 'paddingright':
					this.PaddingRight(x);
					break;
				case 'paddingtop':
					this.PaddingTop(x);
					break;
				case 'page':
					this.Page(x);
					break;
				case 'pagebreakafter':
					this.PageBreakAfter(x);
					break;
				case 'pagebreakbefore':
					this.PageBreakBefore(x);
					break;
				case 'pagebreakinside':
					this.PageBreakInside(x);
					break;
				case 'pageorientation':
					this.PageOrientation(x);
					break;
				case 'paintorder':
					this.PaintOrder(x);
					break;
				case 'perspective':
					this.Perspective(x);
					break;
				case 'perspectiveorigin':
					this.PerspectiveOrigin(x);
					break;
				case 'placecontent':
					this.PlaceContent(x);
					break;
				case 'placeitems':
					this.PlaceItems(x);
					break;
				case 'placeself':
					this.PlaceSelf(x);
					break;
				case 'pointerevents':
					this.PointerEvents(x);
					break;
				case 'position':
					this.Position(x);
					break;

				case 'quotes':
					this.Quotes(x);
					break;

				case 'r':
					this.R(x);
					break;
				case 'resize':
					this.Resize(x);
					break;
				case 'right':
					this.Right(x);
					break;
				case 'rowgap':
					this.RowGap(x);
					break;
				case 'rubyposition':
					this.RubyPosition(x);
					break;
				case 'rx':
					this.Rx(x);
					break;
				case 'ry':
					this.Ry(x);
					break;

				case 'scrollbehavior':
					this.ScrollBehavior(x);
					break;
				case 'scrollmargin':
					this.ScrollMargin(x);
					break;
				case 'scrollmarginblock':
					this.ScrollMarginBlock(x);
					break;
				case 'scrollmarginblockend':
					this.ScrollMarginBlockEnd(x);
					break;
				case 'scrollmarginblockstart':
					this.ScrollMarginBlockStart(x);
					break;
				case 'scrollmarginbottom':
					this.ScrollMarginBottom(x);
					break;
				case 'scrollmargininline':
					this.ScrollMarginInline(x);
					break;
				case 'scrollmargininlineend':
					this.ScrollMarginInlineEnd(x);
					break;
				case 'scrollmargininlinestart':
					this.ScrollMarginInlineStart(x);
					break;
				case 'scrollmarginleft':
					this.ScrollMarginLeft(x);
					break;
				case 'scrollmarginright':
					this.ScrollMarginRight(x);
					break;
				case 'scrollmargintop':
					this.ScrollMarginTop(x);
					break;
				case 'scrollpadding':
					this.ScrollPadding(x);
					break;
				case 'scrollpaddingblock':
					this.ScrollPaddingBlock(x);
					break;
				case 'scrollpaddingblockend':
					this.ScrollPaddingBlockEnd(x);
					break;
				case 'scrollpaddingblockstart':
					this.ScrollPaddingBlockStart(x);
					break;
				case 'scrollpaddingbottom':
					this.ScrollPaddingBottom(x);
					break;
				case 'scrollpaddinginline':
					this.ScrollPaddingInline(x);
					break;
				case 'scrollpaddinginlineend':
					this.ScrollPaddingInlineEnd(x);
					break;
				case 'scrollpaddinginlinestart':
					this.ScrollPaddingInlineStart(x);
					break;
				case 'scrollpaddingleft':
					this.ScrollPaddingLeft(x);
					break;
				case 'scrollpaddingright':
					this.ScrollPaddingRight(x);
					break;
				case 'scrollpaddingtop':
					this.ScrollPaddingTop(x);
					break;
				case 'scrollsnapalign':
					this.ScrollSnapAlign(x);
					break;
				case 'scrollsnapstop':
					this.ScrollSnapStop(x);
					break;
				case 'scrollsnaptype':
					this.ScrollSnapType(x);
					break;
				case 'shapeimagethreshold':
					this.ShapeImageThreshold(x);
					break;
				case 'shapemargin':
					this.ShapeMargin(x);
					break;
				case 'shapeoutside':
					this.ShapeOutside(x);
					break;
				case 'shaperendering':
					this.ShapeRendering(x);
					break;
				case 'size':
					this.Size(x);
					break;
				case 'speak':
					this.Speak(x);
					break;
				case 'src':
					this.Src(x);
					break;
				case 'stopcolor':
					this.StopColor(x);
					break;
				case 'stopopacity':
					this.StopOpacity(x);
					break;
				case 'stroke':
					this.Stroke(x);
					break;
				case 'strokedasharray':
					this.StrokeDasharray(x);
					break;
				case 'strokedashoffset':
					this.StrokeDashoffset(x);
					break;
				case 'strokelinecap':
					this.StrokeLinecap(x);
					break;
				case 'strokelinejoin':
					this.StrokeLinejoin(x);
					break;
				case 'strokemiterlimit':
					this.StrokeMiterlimit(x);
					break;
				case 'strokeopacity':
					this.StrokeOpacity(x);
					break;
				case 'strokewidth':
					this.StrokeWidth(x);
					break;
				case 'syntax':
					this.Syntax(x);
					break;

				case 'tabsize':
					this.TabSize(x);
					break;
				case 'tablelayout':
					this.TableLayout(x);
					break;
				case 'textalign':
					this.TextAlign(x);
					break;
				case 'textalignlast':
					this.TextAlignLast(x);
					break;
				case 'textanchor':
					this.TextAnchor(x);
					break;
				case 'textcombinedupright':
					this.TextCombinedUpright(x);
					break;
				case 'textdecoration':
					this.TextDecoration(x);
					break;
				case 'textdecorationcolor':
					this.TextDecorationColor(x);
					break;
				case 'textdecorationline':
					this.TextDecorationLine(x);
					break;
				case 'textdecorationskipink':
					this.TextDecorationSkipInk(x);
					break;
				case 'textdecorationstyle':
					this.TextDecorationStyle(x);
					break;
				case 'textdecorationthickness':
					this.TextDecorationThickness(x);
					break;
				case 'textindent':
					this.TextIndent(x);
					break;
				case 'textorientation':
					this.TextOrientation(x);
					break;
				case 'textoverflow':
					this.TextOverflow(x);
					break;
				case 'textrendering':
					this.TextRendering(x);
					break;
				case 'textshadow':
					this.TextShadow(x);
					break;
				case 'textsizeadjust':
					this.TextSizeAdjust(x);
					break;
				case 'texttransform':
					this.TextTransform(x);
					break;
				case 'textunderlineoffset':
					this.TextUnderlineOffset(x);
					break;
				case 'textunderlineposition':
					this.TextUnderlinePosition(x);
					break;
				case 'top':
					this.Top(x);
					break;
				case 'touchaction':
					this.TouchAction(x);
					break;
				case 'transform':
					this.Transform(x);
					break;
				case 'transformbox':
					this.TransformBox(x);
					break;
				case 'transformorigin':
					this.TransformOrigin(x);
					break;
				case 'transformstyle':
					this.TransformStyle(x);
					break;
				case 'transition':
					this.Transition(x);
					break;
				case 'transitiondelay':
					this.TransitionDelay(x);
					break;
				case 'transitionduration':
					this.TransitionDuration(x);
					break;
				case 'transitionproperty':
					this.TransitionProperty(x);
					break;
				case 'transitiontimingfunction':
					this.TransitionTimingFunction(x);
					break;

				case 'unicodebidi':
					this.UnicodeBidi(x);
					break;
				case 'unicoderange':
					this.UnicodeRange(x);
					break;
				case 'userselect':
					this.UserSelect(x);
					break;
				case 'userzoom':
					this.UserZoom(x);
					break;

				case 'vectoreffect':
					this.VectorEffect(x);
					break;
				case 'verticalalign':
					this.VerticalAlign(x);
					break;
				case 'visibility':
					this.Visibility(x);
					break;

				case 'width':
					this.Width(x);
					break;
				case 'widows':
					this.Widows(x);
					break;
				case 'willchange':
					this.WillChange(x);
					break;
				case 'wordbreak':
					this.WordBreak(x);
					break;
				case 'wordspacing':
					this.WordSpacing(x);
					break;
				case 'wordwrap':
					this.WordWrap(x);
					break;
				case 'writingmode':
					this.WritingMode(x);
					break;

				case 'x':
					this.X(x);
					break;
				case 'y':
					this.Y(x);
					break;

				case 'zoom':
					this.Zoom(x);
					break;
				default:
					this.Zindex(x);
			}
		}
	}

	GetElement = (element, method) => {
		switch (method.toLowerCase()) {
			case 'class':
				return document.getElementsByClassName(element).valueOf()[0];
				break;
			case 'name':
				return document.getElementsByName(element)[0];
				break;
			case 'tag':
				return document.getElementsByTagName(element)[0];
				break;
			default:
				return document.getElementById(element);
		}
	}

	TypeWriter = (text, speed = 50, at = 0) => {
		let e = this.e;

		function Make() {
			if (at < text.length) {
				e.innerHTML += text.charAt(at);
				at++;
				setTimeout(Make, speed)
			}
		}
		Make();
	}

	Draggable = () => {
		let a = this.e,
			b = this.s,
			pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;

		if (document.getElementById(a.id + "header")) document.getElementById(a.id + "header").onmousedown = MouseDown;
		else a.onmousedown = MouseDown;

		b.position = 'absolute';

		function MouseDown(e) {
			if (a.hasAttribute('draggable')) {
				e = e || window.event;
				e.preventDefault();
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = EndDrag;
				document.onmousemove = StartDrag;
			}
		}

		function StartDrag(e) {
			e = e || window.event;
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			b.top = (a.offsetTop - pos2) + "px";
			b.left = (a.offsetLeft - pos1) + "px";
		}

		function EndDrag() {
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

	CreateNode = (tag, content, attributes = []) => {
		let element = document.createElement(tag),
			i = 0;
		element.innerHTML = content;

		for (i; i < attributes.length; i++) {
			let attr, attr_val;

			if (attributes[i].attribute) attr = attributes[i].attribute;
			else if (attributes[i].attr) attr = attributes[i].attr;
			else if (attributes[i].name) attr = attributes[i].name;
			else if (attributes[i].identifier) attr = attributes[i].identifier;
			else if (attributes[i].i) attr = attributes[i].i;
			else if (attributes[i].a) attr = attributes[i].a;
			else if (attributes[i].style) attr = attributes[i].style;
			else if (attributes[i].property) attr = attributes[i].property;

			if (attributes[i].value) attr_val = attributes[i].value;
			else if (attributes[i].attr_value) attr_val = attributes[i].attr_value;
			else if (attributes[i].identifier_value) attr_val = attributes[i].identifier_value;
			else if (attributes[i].j) attr_val = attributes[i].j;
			else if (attributes[i].b) attr_val = attributes[i].b;
			else if (attributes[i].def) attr_val = attributes[i].def
			else if (attributes[i].content) attr_val = attributes[i].content;
			else if (attributes[i].definition) attr_val = attributes[i].attr_value;
			else if (attributes[i].property_value) attr_val = attributes[i].attr_value;

			element.setAttribute(attr, attr_val);
		}

		this.e.appendChild(element);

		return element;
	}

	Resizable = () => {
		let original_width = 0,
			original_height = 0,
			original_x = 0,
			original_y = 0,
			original_mouse_x = 0,
			original_mouse_y = 0,
			element = this.e,
			resizers_names = [
				Algorithms.StringGenerator(),
				Algorithms.StringGenerator(),
				Algorithms.StringGenerator(),
				Algorithms.StringGenerator(),
			],
			resizers_parent = document.createElement('div'),
			styles = getComputedStyle(element),
			max_width = (!styles.maxWidth) ? parseFloat(styles.maxWidth) : Client.ScreenWidth(),
			max_height = (!styles.maxHeight) ? parseFloat(styles.maxHeight) : Client.ScreenHeight(),
			min_width = (!styles.minWidth) ? parseFloat(styles.minWidth) : parseFloat(styles.width),
			min_height = (!styles.minHeight) ? parseFloat(styles.minHeight) : parseFloat(styles.height),
			i = 0,
			j = 0,
			draggable_band = false;

		resizers_parent.id = Algorithms.StringGenerator();
		element.appendChild(resizers_parent);

		for (i; i < 4; i++) {
			let container = document.createElement('div');
			container.id = resizers_names[i];
			element.appendChild(container);
		}

		let resizers_container = document.getElementById(resizers_parent.id),
			resizers = [
				document.getElementById(resizers_names[0]),
				document.getElementById(resizers_names[1]),
				document.getElementById(resizers_names[2]),
				document.getElementById(resizers_names[3]),
			];

		element.style.position = 'absolute';
		resizers_container.style.width = '100%';
		resizers_container.style.height = '100%';
		resizers_container.style.boxSizing = 'border-box';
		resizers_container.appendChild(resizers[0]);
		resizers_container.appendChild(resizers[1]);
		resizers_container.appendChild(resizers[2]);
		resizers_container.appendChild(resizers[3]);

		resizers[2].style.bottom = '-5px';
		resizers[2].style.left = '-5px';
		resizers[2].style.cursor = 'nesw-resize';
		resizers[3].style.bottom = '-5px';
		resizers[3].style.right = '-5px';
		resizers[3].style.cursor = 'nwse-resize';
		resizers[1].style.top = '-5px';
		resizers[1].style.right = '-5px';
		resizers[1].style.cursor = 'nesw-resize';
		resizers[0].style.top = '-5px';
		resizers[0].style.left = '-5px'
		resizers[0].style.cursor = 'nwse-resize';

		for (j; j < 4; j++) {
			let current_resizer = resizers[j];

			current_resizer.style.width = '10px';
			current_resizer.style.height = '10px';
			current_resizer.style.position = 'absolute';

			current_resizer.addEventListener('mousedown', function(e) {
				if (element.hasAttribute('draggable')) element.removeAttribute('draggable'), draggable_band = true;

				e.preventDefault()
				original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
				original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
				original_x = element.getBoundingClientRect().left;
				original_y = element.getBoundingClientRect().top;
				original_mouse_x = e.pageX;
				original_mouse_y = e.pageY;
				window.addEventListener('mousemove', resize)
				window.addEventListener('mouseup', stopResize)
			})

			function resize(e) {
				let width, height;

				switch (current_resizer.id) {
					case resizers[3].id:
						width = original_width + (e.pageX - original_mouse_x);
						height = original_height + (e.pageY - original_mouse_y);
						if (width > min_width && width < max_width) element.style.width = width + 'px';
						if (height > min_height && height < max_height) element.style.height = height + 'px';
						break;
					case resizers[2].id:
						height = original_height + (e.pageY - original_mouse_y);
						width = original_width - (e.pageX - original_mouse_x);
						if (height > min_height && height < max_height) element.style.height = height + 'px';
						if (width > min_width && width < max_width) element.style.width = width + 'px', element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
						break;
					case resizers[1].id:
						width = original_width + (e.pageX - original_mouse_x);
						height = original_height - (e.pageY - original_mouse_y);
						if (width > min_width && width < max_width) element.style.width = width + 'px';
						if (height > min_height && height < max_height) element.style.height = height + 'px', element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
						break;

					default:
						width = original_width - (e.pageX - original_mouse_x);
						height = original_height - (e.pageY - original_mouse_y);
						if (width > min_width && width < max_width) element.style.width = width + 'px', element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
						if (height > min_height && height < max_height) element.style.height = height + 'px', element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
				}

			}

			function stopResize() {
				window.removeEventListener('mousemove', resize);
				if (draggable_band) element.setAttribute('draggable', '');
			}
		}
	}

}

$ = (element, mode = 'id') => new Node(element, mode);

class ClientHandler {
	NetworkType = () => clientInformation.connection
	BrowserName = () => navigator.appCodeName;
	BrowserVersion = () => navigator.appVersion;
	CookiesStatus = () => navigator.cookieEnabled;
	CurrenPath = () => window.location.pathname
	OnAudioProcess = (action) => document.addEventListener('audioprocess', action);
	OnBeforePrint = (action) => document.addEventListener('beforeprint', action);
	GoBack = () => window.history.back();
	GetHash = () => location.hash;
	SetHash = (new_hash) => location.hash = new_hash;
	AddHash = (hash) => location.hash += hash;
	CloseWindow = () => window.close();
	CurrentPath = () => location.pathname;
	Language = () => navigator.language;
	IsOnline = () => navigator.onLine;
	Platform = () => navigator.platform;
	Engine = () => navigator.product;
	UserAgent = () => navigator.userAgent;
	ScreenAvailHeight = () => screen.availHeight;
	ScreenAvailWidth = () => screen.availWidth;
	ScreenPixelDepth = () => screen.pixelDepth;
	ScreenColorDepth = () => screen.colorDepth;
	Redirect = (new_url) => location.replace(new_url);
	Reload = () => location.reload();
	ScreenHeight = () => window.innerHeight;
	ScreenWidth = () => window.innerWidth;
	Alert = (x) => alert(x);
	ConfirmAlert = (x) => window.x(message);
	PromptBox = (x, default_answer) => window.prompt(x, default_answer);
	FullScreenStatus = () => document.fullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled
	DocumentCookies = () => document.cookie;
	OpenPage = (url) => window.open(url);
	LoadStatus = () => document.readyState;
	ClearConsole = () => console.clear();
	Offline = (a) => window.addEventListener('offline', a);
	Online = (a) => window.addEventListener('online', a);
	DeleteCookie = (name) => this.UpdateCookie(name, '', {
		'max-age': -1,
	});
	Location = () => (navigator.geolocation) ? navigator.geolocation.getCurrentPosition((position) => position) : raise('Geolocation is not supported by this browser.');

	ChangePath = (path) => {
		if (window.location.pathname != '/') history.replaceState({}, '', document.location.origin)
		history.pushState({}, '', path);
	}

	ActionByViewport = (client_vp, action) => {
		let viewport = window.matchMedia(client_vp);

		function execute() {
			if (viewport.matches) return action()
			return action();
		}
		execute();
		viewport.addListener(execute);
	}

	OpenTab = (new_tab_content) => {
		let tab = window.open();
		tab.document.open();
		tab.document.write(new_tab_content);
		tab.document.close();
	}

	SetCookie = ({
		name, value, priority = '', path = '', domain = window.location.hostname, max_age = '', secure = true, sameparty = false, samesite = false
	}) => {
		let cookie = `${name}=${value};path=${path};max-age=${max_age};priority=${priority};domain=${domain}`;
		if (secure) cookie += `;secure`;
		if (samesite != '') cookie += `;samesite=${samesite}`;
		if (sameparty != '') cookie += `;sameparty=${sameparty}`;
		document.cookie = cookie;
	}

	GetCookie = (name) => {
		let matches = document.cookie.match(
				new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")
			),
			cookie = matches ? decodeURIComponent(matches[1]) : undefined;
		if (cookie == undefined) return false;
		return cookie;
	}

	UpdateCookie = (name, value, options = {}) => {
		options = {...options,
		};
		if (options.expires instanceof Date) options.expires = options.expires.toUTCString();
		let UpdatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
		for (let OptionKey in options) {
			UpdatedCookie += ';' + OptionKey;
			let OptionValue = options[OptionKey];
			if (OptionValue !== true) UpdatedCookie += '=' + OptionValue;
		}
		document.cookie = UpdatedCookie;
	}
}

const Client = new ClientHandler();

class DomHandler {
	OnReadyStateChange = (a) => document.onreadystatechange = a;
	OnResizeEvent = (a) => window.addEventListener('resize', a);
	OnUnloadEvent = (a) => window.addEventListener('unloadevent', a);
	OnDomAttrModified = (a) => document.addEventListener('domattrmodified', a);
	OnDomContentLoaded = (a) => document.addEventListener('domcontentloaded', a);
	OnTouchStart = (a) => document.addEventListener('touchstart', a);
	OnTouchMove = (a) => document.addEventListener('touchmove', a);
	OnTouchEnd = (a) => document.addEventListener('touchend', a);
	OnTouchCancel = (a) => document.addEventListener('touchcancel', a);
	OnCopy = (a) => document.addEventListener('copy', a);
	OnCut = (a) => document.addEventListener('cut', a);
	OnPaste = (a) => document.addEventListener('paste', a);
	OnBeforeScriptExecute = (a) => document.addEventListener('beforescriptexecute', a);
	OnAfterScriptExecute = (a) => document.addEventListener('afterscriptexecute', a);
	OnLoadedData = (a) => document.addEventListener('loadeddata', a);
	OnLoadedMetaData = (a) => document.addEventListener('loadedmetadata', a);
	OnLoadStart = (a) => document.addEventListener('loadstart', a);
	OnRateChange = (a) => document.addEventListener('ratechange', a);
	OnVolumeChange = (a) => document.addEventListener('volumechange', a);
	OnWaiting = (a) => document.addEventListener('waiting', a);
	OnMozFullScreenChange = (a) => document.addEventListener('mozfullscreenchange', a);
	OnMozFullScreenError = (a) => document.addEventListener('mozfullscreenerror', a);
	OnMozPointerLockChange = (a) => document.addEventListener('mozpointerlockchange', a);
	OnMozPointerLockError = (a) => document.addEventListener('mozpointerlockerror', a);
	OnError = (a) => document.addEventListener('error', a);
	OnScroll = (a) => document.addEventListener('scroll', a);

	SetTimeout = (a, time = 1000) => window.setTimeout(a, time);
	SetInterval = (a, time = 1000) => window.setInterval(a, time);
	CurrentActiveElement = () => document.activeElement;
	BaseURI = () => document.baseURI;
	GetTitle = () => document.title;
	DocumentDoctype = () => document.doctype;
	HTMLNode = () => document.documentElement;
	HeadNode = () => document.head;
	ImagesNodes = () => document.images;
	LinksNodes = () => document.links;
	ScriptNodes = () => document.scripts;
	AnchorsNodes = () => document.anchors;
	PrintPage = () => window.print();
	SetTitle = (x) => document.title = x;
	BodyNode = () => document.body;
	GetElementsByClass = (class_name) => document.getElementsByClassName(class_name);
	GetElementsByTagName = (tag_name) => document.GetElementsByTagName(tag_name);
	GetElementById = (x) => document.GetElementById(x);
	Write = (x) => document.write(x);
	URL = () => document.URL();
	CharacterSet = () => document.characterSet();
	ContentType = () => document.contentType();
	AddHTML = (x) => document.writeln(x);
	FormsNodes = () => document.forms;
	CreateElement = (tag, options = []) => document.createElement(tag, options)
	CreateComment = (x) => document.createComment(x)
	CreateTextNode = (x) => document.createTextNode(x)
	QuerySelector = (x) => document.QuerySelector(x)
	AddText = (element, content) => element.textContent = content;
	AddEventListener = (listen, action) => document.addEventListener(listen, action);
	AddWindowEventListener = (listen, action) => window.addEventListener(listen, action);
	QuerySelectorAll = (x) => document.querySelectorAll(x)

	DisableDevTools = (action = function() {}) => {
		document.addEventListener('contextmenu', event => {
			event.preventDefault();
			action();
		});
		document.onkeydown = function(e) {
			if (event.keyCode == 123) return false;
			if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
				action();
				return false;
			}
			if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
				action();
				return false;
			}
			if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
				action();
				return false;
			}
			if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
				action();
				return false;
			}
		}
	}

	ClearContent = () => {
		document.write('');
		document.close();
	}

	SetDesignMode = (mode) => {
		switch (mode.toLowerCase()) {
			case 'on':
				document.designMode = 'on';
				break;
			default:
				document.designMode = 'off';
				break;
		}
	}

	CheckNodeID = (node) => {
		if (!node.id) {
			let random_node_id = Algorithms.StringGenerator(8);
			node.setAttribute('id', random_node_id);
			return random_node_id;
		}
		return node.id;
	}

	RemoveNodes = (query_mode = 'all', identifier) => {
		switch (query_mode.toLowerCase()) {
			case 'all':
				this.QuerySelectorAll(identifier).remove();
				break;
			case 'normal':
				this.QuerySelector(identifier).remove();
				break;
			default:
				this.QuerySelectorAll(identifier).remove();
		}
	}
}

const Dom = new DomHandler();

class API {
	constructor({
		url, token, method = 'GET', headers = {}, debug = false
	}) {
		this.url = url;
		this.method = method;
		this.token = token;
		this.debug = debug;
		this.connection = undefined;

		this.headers = Algorithms.MergeList({
			'Authorization': `${this.token}`
		}, headers);

		this.Connect();
	};

	Connect = () => {
		let HTTP = {
			method: this.method,
			headers: this.headers,
			mode: 'cors',
			cache: 'default',
		}

		if (this.debug) raise(`Connection made to [${this.url}] using method [${this.method}].`, 'warn');
		this.connection = new Request(this.url, HTTP);
	}

	Fetch = (action) => {
		fetch(this.connection)
			.then(response => response.json())
			.then(data => action(data))
			.catch(err => raise(`[Error]: (Fetch ${this.url}[${this.method}]) [Error: ${err}]`));
	}
}

class RouterHandler {
	Go = (path) => Client.ChangePath(path);
	ClearPath = () => Client.ChangePath('/');
	GetPath = () => Client.CurrenPath();
	Redirect = (url) => Client.Redirect(url);

	SetDocumentContent = (x) => {
		Dom.ClearContent();
		Dom.AddHTML(x);
	}
}

Router = new RouterHandler();

Dom.OnReadyStateChange(() => {
	Nodes = (prop) => Dom.QuerySelectorAll(`[${prop}]`);

	if (document.readyState == 'complete') {
		Nodes('draggable').forEach((n) => $(Dom.CheckNodeID(n)).Draggable());
		Nodes('resizable').forEach((n) => $(Dom.CheckNodeID(n)).Resizable());
		Nodes('typewriter').forEach((n) => {
			e = $(Dom.CheckNodeID(n));
			if ((e.HasAttribute('tw-message')) || (e.GetContent().length >= 1)) {
				let speed = 50,
					start_at = 0,
					message = '';
				if (e.HasAttribute('tw-speed')) speed = e.GetAttribute('tw-speed');
				if (e.HasAttribute('tw-start-at')) start_at = e.GetAttribute('tw-start-at');
				if ((e.HasAttribute('tw-message') && (e.GetContent().length >= 1))) message = e.GetContent() + ' ' + e.GetAttribute('tw-message');
				else if (e.HasAttribute('tw-message')) message = e.GetAttribute('tw-message');
				else message = e.GetContent();
				e.ClearContent();
				e.TypeWriter(message, speed, start_at);
			} else {
				raise(`An error occurred when executing the TypeWriterfunction because thetw-message="message" attribute does not exist in the n.`);
				raise(n);
			};
		});

		L = (method, attribute) => {
			Nodes(attribute).forEach((n) => {
				e = $(Dom.CheckNodeID(n));
				e[method](e.GetAttribute(attribute));
				e.RemoveAttribute(attribute);
			});
		};

		L('AlignContent', 'align-content');
		L('AlignItems', 'align-items');
		L('AlignmentBaseLine', 'alignment-base-line');
		L('All', 'all');
		L('Animation', 'animation');
		L('AnimationDelay', 'animation-delay');
		L('AnimationFillMode', 'animation-fill-mode');
		L('AnimationIterationCount', 'animation-iteration-count');
		L('AnimationName', 'animation-name');
		L('AnimationPlayState', 'animation-play-state');
		L('AnimationTimingFunction', 'animation-timing-function');
		L('Appearance', 'appearance');
		L('AscentOverride', 'ascent-override');

		L('BackdropFilter', 'backdrop-filter');
		L('BackfaceVisibility', 'backface-visibility');
		L('Background', 'background');
		L('BackgroundAttachment', 'background-attachment');
		L('BackgroundBlendMode', 'background-blend-mode');
		L('BackgroundClip', 'background-clip');
		L('BackgroundColor', 'background-color');
		L('BackgroundImage', 'background-image');
		L('BackgroundOrigin', 'background-origin');
		L('BackgroundPosition', 'background-position');
		L('BackgroundPositionX', 'background-position-x');
		L('BackgroundPositionY', 'background-position-y');
		L('BackgroundPosition', 'background-position');
		L('BackgroundRepeat', 'background-repeat');
		L('BackgroundRepeatX', 'background-repeat-x');
		L('BackgroundRepeatY', 'background-repeat-y');
		L('BackgroundSize', 'background-size');
		L('BaselineShift', 'baseline-shift');
		L('BlockSize', 'block-size');
		L('Border', 'border');
		L('BorderBlock', 'border-block');
		L('BorderBlockColor', 'border-block-color');
		L('BorderBlockEnd', 'border-block-end');
		L('BorderBlockEndColor', 'border-block-end-color');
		L('BorderBlockEndWidth', 'border-block-end-width');
		L('BorderBlockStart', 'border-block-start');
		L('BorderBlockStartColor', 'border-block-start-color');
		L('BorderBlockStartStyle', 'border-block-start-style');
		L('BorderBlockStartWidth', 'border-block-start-width');
		L('BorderBlockStyle', 'border-block-style');
		L('BorderBlockWidth', 'border-block-width');
		L('BorderBottom', 'border-bottom');
		L('BorderBottomColor', 'border-bottom-color');
		L('BorderBottomLeftRadius', 'border-bottom-left-radius');
		L('BorderBottomRightRadius', 'border-bottom-right-radius');
		L('BorderCollapse', 'border-collapse');
		L('BorderColor', 'border-color');
		L('BorderEndEndRadius', 'border-end-end-radius');
		L('BorderEndStartRadius', 'border-end-start-radius');
		L('BorderImage', 'border-image');
		L('BorderImageOutset', 'border-image-outset');
		L('BorderImageRepeat', 'border-image-repeat');
		L('BorderImageSource', 'border-image-source');
		L('BorderImageWidth', 'border-image-width');
		L('BorderInline', 'border-inline');
		L('BorderInlineColor', 'border-inline-color');
		L('BorderInlineEnd', 'border-inline-end');
		L('BorderInlineEndColor', 'border-inline-end-color');
		L('BorderInlineEndStyle', 'border-inline-end-style');
		L('BorderInlineEndWidth', 'border-inline-end-width');
		L('BorderInlineStart', 'border-inline-start');
		L('BorderInlineStartColor', 'border-inline-start-color');
		L('BorderInlineStartStyle', 'border-inline-start-style');
		L('BorderInlineStartWidth', 'border-inline-start-width');
		L('BorderInlineStyle', 'border-inline-style');
		L('BorderInlineWidth', 'border-inline-width');
		L('BorderLeft', 'border-left');
		L('BorderLeftColor', 'border-left-color');
		L('BorderLeftStyle', 'border-left-style');
		L('BorderLeftWidth', 'border-left-width');
		L('BorderRadius', 'border-radius');
		L('BorderRight', 'border-right');
		L('BorderRightColor', 'border-right-color');
		L('BorderRightStyle', 'border-right-style');
		L('BorderRightWidth', 'border-right-width');
		L('BorderSpacing', 'border-spacing');
		L('BorderStartEndRadius', 'border-start-end-radius');
		L('BorderStartStartRadius', 'border-start-start-radius');
		L('BorderStyle', 'border-style');
		L('BorderTop', 'border-top');
		L('BorderTopColor', 'border-top-color');
		L('BorderTopLeftRadius', 'border-top-left-radius');
		L('BorderTopRightRadius', 'border-top-right-radius');
		L('BorderTopStyle', 'border-top-style');
		L('BorderTopWidth', 'border-top-width');
		L('BorderBottom', 'border-bottom');
		L('BoxShadow', 'box-shadow');
		L('BoxSizing', 'box-sizing');
		L('BreakAfter', 'break-after');
		L('BreakBefore', 'break-before');
		L('BreakInside', 'break-inside');
		L('BufferedRendering', 'buffered-rendering');

		L('CaptionSide', 'caption-side');
		L('CaretColor', 'caret-color');
		L('Clear', 'clear');
		L('Clip', 'clip');
		L('ClipPath', 'clip-path');
		L('ClipRule', 'clip-rule');
		L('Color', 'color');
		L('ColorInterpolation', 'color-interpolation');
		L('ColorInterpolationFilters', 'color-interpolation-filters');
		L('ColorRendering', 'color-rendering');
		L('ColorScheme', 'color-scheme');
		L('ColumnCount', 'column-count');
		L('ColumnFill', 'column-fill');
		L('ColumnGap', 'column-gap');
		L('ColumnRule', 'column-rule');
		L('ColumnRuleColor', 'column-rule-color');
		L('ColumnRuleStyle', 'column-rule-style');
		L('ColumnRuleWidth', 'column-rule-width');
		L('ColumnSpan', 'column-span');
		L('ColumnWidth', 'column-width');
		L('Columns', 'columns');
		L('Contain', 'contain');
		L('ContainIntrinsicSize', 'contain-intrinsic-size');
		L('Content', 'content');
		L('ContentVisibility', 'content-visibility');
		L('CounterIncrement', 'counter-increment');
		L('CounterReset', 'counter-set');
		L('Cursor', 'cursor');
		L('Cx', 'cx');
		L('Cy', 'cy');

		L('Direction', 'direction');
		L('Display', 'display');
		L('DescentOverride', 'descent-override');
		L('DominantBaseline', 'dominant-baseline');

		L('EmptyCells', 'empty-cells');
		L('EpubCaptionSide', 'epub-caption-side');
		L('EpubTextCombine', 'epub-text-combine');
		L('EpubTextEmphasis', 'epub-text-emphasis');
		L('EpubTextEmphasisColor', 'epub-text-emphasis-color');
		L('EpubTextOrientation', 'epub-text-orientation');
		L('EpubTextTransform', 'epub-text-transform');
		L('EpubWordBreak', 'epub-word-break');
		L('EpubWritingMode', 'epub-writing-mode');

		L('Fill', 'fill');
		L('FillOpacity', 'fill-opacity');
		L('FillRule', 'fill-rule');
		L('Flex', 'flex');
		L('FlexBasis', 'flex-basis');
		L('FlexDirection', 'flex-direction');
		L('FlexFlow', 'flex-flow');
		L('FlexGrow', 'flex-grow');
		L('FlexWrap', 'flex-wrap');
		L('Float', 'float');
		L('FloodColor', 'flood-color');
		L('FloodOpacity', 'flood-opacity');
		L('Font', 'font');
		L('FontDisplay', 'font-display');
		L('FontFamily', 'font-family');
		L('FontFeatureSettings', 'font-feature-settings');
		L('FontKerning', 'font-kerning');
		L('FontOpticalSizing', 'font-optical-sizing');
		L('FontSize', 'font-size');
		L('FontStretch', 'font-stretch');
		L('FontStyle', 'font-style');
		L('FontVariant', 'font-variant');
		L('FontVariantCaps', 'font-variant-caps');
		L('FontVariantEastAsian', 'font-variant-east-asian');
		L('FontVariantLigatures', 'font-variant-ligatures');
		L('FontVariantNumeric', 'font-variant-numeric');
		L('FontVariationSetting', 'font-variation-setting');
		L('FontWeight', 'font-weight');
		L('ForcedColorAdjust', 'forced-color-adjust');

		L('Gap', 'gap');
		L('Grid', 'grid');
		L('GridArea', 'grid-area');
		L('GridAutoColumns', 'grid-auto-columns');
		L('GridAutoFlow', 'grid-auto-flow');
		L('GridAutoRows', 'grid-auto-rows');
		L('GridColumn', 'grid-column');
		L('GridColumnEnd', 'grid-column-end');
		L('GridColumnGap', 'grid-column-gap');
		L('GridColumnStart', 'grid-column-start');
		L('GridGap', 'grid-gap');
		L('GridRow', 'grid-row');
		L('GridRowEnd', 'grid-row-end');
		L('GridRowGap', 'grid-row-gap');
		L('GridRowStart', 'grid-row-start');
		L('GridTemplate', 'grid-template');
		L('GridTemplateAreas', 'grid-template-areas');
		L('GridTemplateColumns', 'grid-template-columns');
		L('GridTemplateRows', 'grid-template-rows');

		L('Height', 'height');
		L('Hyphens', 'hyphens');

		L('ImageOrientation', 'image-orientation');
		L('ImageRendering', 'image-rendering');
		L('Inherits', 'inherits');
		L('InitialValue', 'initial-value');
		L('InlineSize', 'inline-size');
		L('Inset', 'inset');
		L('InsetBlock', 'inset-block');
		L('InsetBlockEnd', 'inset-block-end');
		L('InsetBlockStart', 'inset-block-start');
		L('InsetInline', 'inset-inline');
		L('InsetInlineEnd', 'inset-inline-end');
		L('InsetInlineStart', 'inset-inline-start');
		L('Isolation', 'isolation');

		L('JustifyContent', 'justify-content');
		L('JustifyItems', 'justify-items');
		L('JustifySelf', 'justify-self');

		L('Left', 'left');
		L('LetterSpacing', 'letter-spacing');
		L('LightingColor', 'lighting-color');
		L('LineBreak', 'line-break');
		L('LineGapOverride', 'line-gap-override');
		L('LineHeight', 'line-height');
		L('ListStyle', 'list-style');
		L('ListStyleImage', 'list-style-image');
		L('ListStylePosition', 'list-style-position');
		L('ListStyleType', 'list-style-type');

		L('Margin', 'margin');
		L('MarginBlock', 'margin-block');
		L('MarginBlockEnd', 'margin-block-end');
		L('MarginBlockStart', 'margin-block-start');
		L('MarginBottom', 'margin-bottom');
		L('MarginInline', 'margin-inline');
		L('MarginInlineEnd', 'margin-inline-end');
		L('MarginInlineStart', 'margin-inline-start');
		L('MarginLeft', 'margin-left');
		L('MarginRight', 'margin-right');
		L('MarginTop', 'margin-top');
		L('Marker', 'marker');
		L('MarkerEnd', 'marker-end');
		L('MarkerMid', 'marked-mid');
		L('MarkerStart', 'marker-start');
		L('Mask', 'mask');
		L('MaskType', 'mask-type');
		L('MaxBlockSize', 'max-block-size');
		L('MaxHeight', 'max-height');
		L('MaxInlineSize', 'max-inline-size');
		L('MaxWidth', 'max-width');
		L('MaxZoom', 'max-zoom');
		L('MinBlockSize', 'min-block-size');
		L('MinHeight', 'min-height');
		L('MinInlineSize', 'min-inline-size');
		L('MinWidth', 'min-width');
		L('MinZoom', 'min-zoom');
		L('MixBlendMode', 'mix-blend-mode');

		L('ObjectFit', 'object-fit');
		L('ObjectPosition', 'object-position');
		L('Offset', 'offset');
		L('OffsetDistance', 'offset-distance');
		L('OffsetPath', 'offset-path');
		L('OffsetRotate', 'offset-rotate');
		L('Opacity', 'opacity');
		L('Order', 'order');
		L('Orientation', 'orientation');
		L('Orphans', 'orphans');
		L('Outline', 'outline');
		L('OutlineColor', 'outline-color');
		L('OutlineOffset', 'outline-offset');
		L('OutlineStyle', 'outline-style');
		L('OutlineWidth', 'outline-width');
		L('Overflow', 'overflow');
		L('OverflowAnchor', 'overflow-anchor');
		L('OverflowClipMargin', 'overflow-clip-margin');
		L('OverflowWrap', 'overflow-wrap');
		L('OverflowX', 'overflow-x');
		L('OverflowY', 'overflow-y');
		L('OverscrollBehavior', 'overscroll-behavior');
		L('OverscrollBehaviorBlock', 'overscroll-behavior-block');
		L('OverscrollBehaviorInline', 'overscroll-behavior-inline');
		L('OverscrollBehaviorX', 'overscroll-behavior-x');
		L('OverscrollBehaviorY', 'overscroll-behavior-y');

		L('Padding', 'padding');
		L('PaddingBlock', 'padding-block');
		L('PaddingBlockEnd', 'padding-block-end');
		L('PaddingBlockStart', 'padding-block-start');
		L('PaddingBottom', 'padding-bottom');
		L('PaddingInline', 'padding-inline');
		L('PaddingInlineEnd', 'padding-inline-end');
		L('PaddingInlineStart', 'padding-inline-start');
		L('PaddingLeft', 'padding-left');
		L('PaddingRight', 'padding-right');
		L('PaddingTop', 'padding-top');
		L('Page', 'page');
		L('PageBreakAfter', 'page-break-after');
		L('PageBreakBefore', 'page-break-before');
		L('PageBreakInside', 'page-break-inside');
		L('PageOrientation', 'page-orientation');
		L('PaintOrder', 'paint-order');
		L('Perspective', 'perspective');
		L('PerspectiveOrigin', 'perspective-origin');
		L('PlaceContent', 'place-content');
		L('PlaceItems', 'place-items');
		L('PlaceSelf', 'place-self');
		L('PointerEvents', 'pointer-events');
		L('Position', 'position');

		L('Quotes', 'quotes');
		L('R', 'r');
		L('Resize', 'resize');
		L('Right', 'right');
		L('RowGap', 'row-gap');
		L('RubyPosition', 'ruby-position');
		L('Rx', 'rx');
		L('Ry', 'ry');

		L('ScrollBehavior', 'scroll-behavior');
		L('ScrollMargin', 'scroll-margin');
		L('ScrollMarginBlock', 'scroll-margin-block');
		L('ScrollMarginBlockEnd', 'scroll-margin-block-end');
		L('ScrollMarginBlockStart', 'scroll-margin-block-start');
		L('ScrollMarginBottom', 'scroll-margin-bottom');
		L('ScrollMarginInline', 'scroll-margin-inline');
		L('ScrollMarginInlineEnd', 'scroll-margin-inline-end');
		L('ScrollMarginInlineStart', 'scroll-margin-inline-start');
		L('ScrollMarginLeft', 'scroll-margin-left');
		L('ScrollMarginRight', 'scroll-margin-right');
		L('ScrollMarginTop', 'scroll-margin-top');
		L('ScrollPadding', 'scroll-padding');
		L('ScrollPaddingBlock', 'scroll-padding-block');
		L('ScrollPaddingBlockEnd', 'scroll-padding-block-end');
		L('ScrollPaddingBlockStart', 'scroll-padding-block-start');
		L('ScrollPaddingBottom', 'scroll-padding-bottom');
		L('ScrollPaddingInline', 'scroll-padding-inline');
		L('ScrollPaddingInlineEnd', 'scroll-padding-inline-end');
		L('ScrollPaddingInlineStart', 'scroll-padding-inline-start');
		L('ScrollPaddingLeft', 'scroll-padding-left');
		L('ScrollPaddingRight', 'scroll-padding-right');
		L('ScrollPaddingTop', 'scroll-padding-top');
		L('ScrollSnapAlign', 'scroll-snap-align');
		L('ScrollSnapStop', 'scroll-snap-stop');
		L('ScrollSnapType', 'scroll-snap-type');
		L('ShapeImageThreshold', 'shape-image-threshold');
		L('ShapeMargin', 'shape-margin');
		L('ShapeOutside', 'shape-outside');
		L('ShapeRendering', 'shape-rendering');
		L('Size', 'size');
		L('Speak', 'speak');
		L('Src', 'src');
		L('StopColor', 'stop-color');
		L('StopOpacity', 'stop-opacity');
		L('Stroke', 'stroke');
		L('StrokeDasharray', 'stroke-dasharray');
		L('StrokeDashoffset', 'stroke-dashoffset');
		L('StrokeLinecap', 'stroke-linecap');
		L('StrokeLinejoin', 'stroke-linejoin');
		L('StrokeMiterlimit', 'stroke-miterlimit');
		L('StrokeOpacity', 'stroke-opacity');
		L('StrokeWidth', 'stroke-width');
		L('Syntax', 'syntax');

		L('D', 'spd');

		L('TabSize', 'tab-size');
		L('TableLayout', 'table-layout');
		L('TextAlign', 'text-align');
		L('TextAlignLast', 'text-align-last');
		L('TextAnchor', 'text-anchor');
		L('TextCombinedUpright', 'text-combined-upright');
		L('TextDecoration', 'text-decoration');
		L('TextDecorationColor', 'text-decoration-color');
		L('TextDecorationLine', 'text-decoration-line');
		L('TextDecorationSkipInk', 'text-decoration-skip-ink');
		L('TextDecorationStyle', 'text-decoration-style');
		L('TextDecorationThickness', 'text-decoration-thickness');
		L('TextIndent', 'text-indent');
		L('TextOrientation', 'text-orientation');
		L('TextOverflow', 'text-overflow');
		L('TextRendering', 'text-rendering');
		L('TextShadow', 'text-shadow');
		L('TextSizeAdjust', 'text-size-adjust');
		L('TextTransform', 'text-transform');
		L('TextUnderlineOffset', 'text-underline-offset');
		L('AlignContent', 'text-underline-position');
		L('Top', 'top');
		L('TouchAction', 'touch-action');
		L('Transform', 'transform');
		L('TransformBox', 'transform-box');
		L('TransformOrigin', 'transform-origin');
		L('TransformStyle', 'transform-style');
		L('Transition', 'transition');
		L('TransitionDelay', 'transition-delay');
		L('TransitionDuration', 'transition-duration');
		L('TransitionProperty', 'transition-property');
		L('TransitionTimingFunction', 'transition-timing-function');

		L('UnicodeBidi', 'unicode-bidi');
		L('UnicodeRange', 'unicode-range');
		L('UserSelect', 'user-select');
		L('UserZoom', 'user-zoom');

		L('VectorEffect', 'vector-effect');
		L('VerticalAlign', 'vertical-align');
		L('Visibility', 'visibility');

		L('Width', 'width');
		L('Widows', 'widows');
		L('WillChange', 'will-change');
		L('WordBreak', 'word-break');
		L('WordSpacing', 'word-spacing');
		L('WordWrap', 'word-wrap');
		L('WritingMode', 'writing-mode');

		L('X', 'x');
		L('Y', 'y');

		L('Zindex', 'z-index');
		L('MaxZoom', 'zoom');
	}
});
