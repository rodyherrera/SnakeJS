/***
 * Copyright (C) Rodolfo Herrera Hernandez. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root 
 * for full license information.
 *
 * =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
 *
 * For related information - https://github.com/codewithrodi/SnakeJS/
 * 
 * SnakeJS -> A new way to write HTML and JavaScript, write 
 * less and do more, leaving the standard of the initial 
 * javascript programming style.
 * 
 * Examples -> Templates that contain example code to be 
 * able to use different functionalities that the library 
 * contains, not all the functionalities are available but 
 * if you take the time to review each function definition 
 * seeing how the library is written or looking explicitly for
 *  obvious names using (CTRL + F) names of functions to be able 
 * to use them, SnakeJS is designed in such a way that every developer
 *  can infer and understand how this works without having to comment 
 * because each byte being frontend will affect the load of the site.
 * 
 * Just a beta version of the library.
 * 
 * Remember to drink water, you son of a bitch.
 * 
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 ****/

class Stack{
    #Items = [];
    Push = (Item) => this.#Items.unshift(Item);
    Pop = () => this.#Items.shift();
    Peek = () => this.#Items[0];
    IsEmpty = () => this.#Items.length === 0;
    Clear = () => this.#Items.length = 0;

    get Length(){
        return this.#Items.length;
    }
};

class Queue{
    #Items = [];
    EnQueue = (Item) => this.#Items.push(Item);
    DeQueue = () => this.#Items.shift();
    Peek = () => this.#Items[0];
    IsEmpty = () => this.#Items.length === 0;
    Clear = () => this.#Items.length = 0;

    get Length(){
        return this.#Items.length;
    }
};

const SnakeAlgorithms = {
	Fibonacci: (MaxIteration) => {
		const Sequence = [1];
		let CurrentValue = 1, PreviousValue = 0, Iterator = 0;
		if(MaxIteration === 1)
			return Sequence;
		while(Iterator < MaxIteration){
			CurrentValue += PreviousValue;
			PreviousValue = CurrentValue - PreviousValue;
			Sequence.push(CurrentValue);
			Iterator++;
		}
		return Sequence;
	},

	PrimeFactors: (Integer) => {
		let CloneOfInteger = Integer, Factors = [];
		for(let Iterator = 2; Iterator <= Math.sqrt(CloneOfInteger); Iterator++)
			while(CloneOfInteger % Iterator === 0){
				CloneOfInteger /= Iterator;
				Factors.push(Iterator);
			}
		if(CloneOfInteger !== 1)
			Factors.push(CloneOfInteger);
		return Factors;
	},

	IsPrime: (Integer) => {
		const Boundary = Math.floor(Math.sqrt(Integer));
		for(let Iterator = 2; Integer <= Boundary; Iterator++)
			if(Integer % Iterator == 0)
				return false;
		return Integer >= 2;
	},

	SubStringCount: (BaseString, SubString) => {
		let Counter = 0, Iterator = 0;
		while(true){
			const Result = BaseString.indexOf(SubString, Iterator);
			if(Result !== -1)
				[Counter, Iterator] = [Counter + 1, Result + 1];
			else
				return Counter;
		}
	},

	HammingDistance: (BaseString, StringToCompare) => {
		if(BaseString.length !== StringToCompare.length)
			throw new Error('Strings must be of the same length!');
		let Distance = 0;
		for(let Iterator = 0; Iterator < BaseString.length; Iterator++)
			if(BaseString[Iterator] !== StringToCompare[Iterator])
				Distance += 1;
		return Distance;
	},

	Factorial: (PositiveNumber) => PositiveNumber < 0 ? (() => {
		throw new TypeError('Negative numbers are not allowed!');
	})() : PositiveNumber <= 1 ? 1 : PositiveNumber * SnakeAlgorithms.Factorial(PositiveNumber - 1),

    MergeObject: (BaseObject, ExtensionObject) => 
        Object.assign({}, BaseObject, ExtensionObject),

	MergeList: (BaseList, ExtensionList) =>
		[...BaseList, ...ExtensionList],
    
    RandomInteger: (MinimumValue, MaximumValue) =>
        Math.floor(Math.random() * (MaximumValue - MinimumValue + 1)) + MinimumValue,
    
    RandomNumber: (MinimumValue, MaximumValue) =>
        Math.random() * (MaximumValue - MinimumValue) + MinimumValue,

    StringGenerator: (Length = 8, Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
        let StringToReturn = '';
        for(let Iterator = 0; Iterator < Length; Iterator++)
            StringToReturn += Characters.charAt(Math.floor(Math.random() * Length));
        return StringToReturn;
    },

    BinarySearch: (Value, List) => {
		let Start = 0, End = List.length -1;
		while(Start <= End){
			let Middle = Math.floor((Start + End) / 2);
			if(Value === List[Middle])
				return Middle;
			else if(Value > List[Middle])
				Start = Middle + 1;
			else if(Value < List[Middle])
				End = Middle - 1;
		}
		return -1;
    },

	Average: (List) => List.reduce((Accumulator, Value) => Accumulator + Value) / List.length,

	MaximumValue: (List) => Math.max(...List),

	MinimumValue: (List) => Math.min(...List),

	InterpolationSearch: (Value, List) => {
		let
			LeftIndex = 0,
			RightIndex = List.length - 1;
		while(LeftIndex <= RightIndex){
			const
				RangeDelta = List[RightIndex] - List[LeftIndex],
				IndexDelta = RightIndex - LeftIndex,
				ValueDelta = Value - List[LeftIndex];
			if(ValueDelta < 0)
				return -1;
			if(!RangeDelta)
				return List[LeftIndex] === Value ? LeftIndex : -1;
			const MiddleIndex = LeftIndex + Math.floor((ValueDelta * IndexDelta) / RangeDelta);
			if(List[MiddleIndex] === Value)
				return MiddleIndex;
			if(List[MiddleIndex] < Value)
				LeftIndex = MiddleIndex + 1;
			else
				RightIndex = MiddleIndex - 1;
		}
	},

    LinearSearch: (Value, List) => {
        for(let Iterator = 0; Iterator < List.length; Iterator++)
            if(List[Iterator] == Value)
                return Iterator;
        return -1;
    },

    InsertionSort: (List) => {
		for(let Iterator = 0; Iterator < List.length; Iterator++)
			for(let SubIterator = Iterator - 1; SubIterator > -1; SubIterator--)
				if(List[SubIterator + 1] < List[SubIterator])
					[List[SubIterator + 1], List[SubIterator]] = [List[SubIterator], List[SubIterator + 1]];
		return List;
    },

    SelectionSort: (List) => {
        for(let Iterator = 0; Iterator < List.length; Iterator++){
            let Minimum = Iterator;
            for(let SubIterator = Iterator + 1; SubIterator < List.length; SubIterator++)
                if(List[SubIterator] < List[Minimum])
                    Minimum = SubIterator;
            if(Minimum != Iterator){
                let Buffer = List[Iterator];
                List[Iterator] = List[Minimum];
                List[Minimum] = Buffer;
            }
        }
        return List;
    },

	Shuffle: (List) => {
		let Length = List.length;
		while(Length){
			const Index = Math.floor(Math.random() * Length--);
			[List[Length], List[Index]] = [List[Index], List[Length]];
		}
		return List;
	},

	BubbleSort: (List) => {
		let Break;
		do{
			Break = false;
			for(let Iterator = 0; Iterator < List.length; Iterator++)
				if(List[Iterator] > List[Iterator + 1]){
					let Buffer = List[Iterator];
					List[Iterator] = List[Iterator + 1];
					List[Iterator + 1] = Buffer;
					Break = true;
				}
		}while(Break);
		return List;
	},
};

const SnakeDatetime = {
	GetDate: () => new Date(),
	GetCurrentDay: () => new Date().getDay(),
	GetCurrentYear: () => new Date().getFullYear(),
	GetCurrentMonth: () => new Date().getMonth(),
	GetCurrentHour: () => new Date().getHours(),
	GetCurrentMinutes: () => new Date().getMinutes(),
	GetCurrentSeconds: () => new Date().getSeconds()
};

const SnakeServer = {
    GetProtocol: () => location.protocol,
    GetPort: () => location.port,
    GetOrigin: () => location.origin,
    GetHostname: () => location.hostname,
    GetHost: () => location.host,
    GetLocation: () => location.href,
    GetDomain: () => document.domain
};

const SnakeDOM = {
	OnReadyStateChange: (Action) => document.onreadystatechange = Action,
	OnResizeEvent: (Action) => window.addEventListener('resize', Action),
	OnUnloadEvent: (Action) => window.addEventListener('unloadevent', Action),
	OnDomAttrModified: (Action) => document.addEventListener('domattrmodified', Action),
	OnDomContentLoaded: (Action) => document.addEventListener('domcontentloaded', Action),
	OnTouchStart: (Action) => document.addEventListener('touchstart', Action),
	OnTouchMove: (Action) => document.addEventListener('touchmove', Action),
	OnTouchEnd: (Action) => document.addEventListener('touchend', Action),
	OnTouchCancel: (Action) => document.addEventListener('touchcancel', Action),
	OnCopy: (Action) => document.addEventListener('copy', Action),
	OnCut: (Action) => document.addEventListener('cut', Action),
	OnPaste: (Action) => document.addEventListener('paste', Action),
	OnBeforeScriptExecute: (Action) => document.addEventListener('beforescriptexecute', Action),
	OnAfterScriptExecute: (Action) => document.addEventListener('afterscriptexecute', Action),
	OnLoadedData: (Action) => document.addEventListener('loadeddata', Action),
	OnLoadedMetaData: (Action) => document.addEventListener('loadedmetadata', Action),
	OnLoadStart: (Action) => document.addEventListener('loadstart', Action),
	OnRateChange: (Action) => document.addEventListener('ratechange', Action),
	OnVolumeChange: (Action) => document.addEventListener('volumechange', Action),
	OnWaiting: (Action) => document.addEventListener('waiting', Action),
	OnMozFullScreenChange: (Action) => document.addEventListener('mozfullscreenchange', Action),
	OnMozFullScreenError: (Action) => document.addEventListener('mozfullscreenerror', Action),
	OnMozPointerLockChange: (Action) => document.addEventListener('mozpointerlockchange', Action),
	OnMozPointerLockError: (Action) => document.addEventListener('mozpointerlockerror', Action),
	OnError: (Action) => document.addEventListener('error', Action),
	OnScroll: (Action) => document.addEventListener('scroll', Action),

	SetTimeout: (Action, Time = 1000) => window.setTimeout(Action, Time),
	SetInterval: (Action, Time = 1000) => window.setInterval(Action, Time),
	GetCurrentActiveElement: () => document.activeElement,
	GetBaseURI: () => document.baseURI,
	GetTitle: () => document.title,
	GetDocumentDoctype: () => document.doctype,
	GetHTMLNode: () => document.documentElement,
	GetHeadNode: () => document.head,
	GetImagesNodes: () => document.images,
	GetLinksNodes: () => document.links,
	GetScriptNodes: () => document.scripts,
	GetAnchorsNodes: () => document.anchors,
	PrintPage: () => window.print(),
	SetTitle: (Title) => document.title = Title,
	GetBodyNode: () => document.body,
	GetElementsByClass: (ClassName) => document.getElementsByClassName(ClassName),
	GetElementsByTagName: (TagName) => document.GetElementsByTagName(TagName),
	GetElementById: (x) => document.GetElementById(x),
	Write: (HTMLCode) => document.write(HTMLCode),
	GetURL: () => document.URL(),
	GetCharacterSet: () => document.characterSet(),
	GetContentType: () => document.contentType(),
	AddHTML: (HTMLCode) => document.writeln(HTMLCode),
	GetFormsNodes: () => document.forms,
	CreateElement: (Tag, Options = []) => document.createElement(Tag, Options),
	CreateComment: (Comment) => document.createComment(Comment),
	CreateTextNode: (Properties) => document.createTextNode(Properties),
	QuerySelector: (Nodes) => document.querySelector(Nodes),
	AddText: (Node, Content) => Node.textContent = Content,
	AddEventListener: (Listen, Action) => document.addEventListener(Listen, Action),
	AddWindowEventListener: (Listen, Action) => window.addEventListener(Listen, Action),
	QuerySelectorAll: (Nodes) => document.querySelectorAll(Nodes),

	ReplaceDeveloperTools: (Action = function(){}) => {
		document.addEventListener('contextmenu', event => {
			event.preventDefault();
			Action();
		});

		document.onkeydown = function(Event){
			if(Event.keyCode == 123)
				return false;
			if( (Event.ctrlKey) && (Event.shiftKey) && (Event.keyCode == 'I'.charCodeAt(0)) ){
				Action();
				return false;
			}
			if( (Event.ctrlKey) && (Event.shiftKey) && (Event.keyCode == 'C'.charCodeAt(0)) ){
				Action();
				return false;
			}
			if( (Event.ctrlKey) && (Event.shiftKey) && (Event.keyCode == 'J'.charCodeAt(0)) ){
				Action();
				return false;
			}
			if( (Event.ctrlKey) && (Event.keyCode == 'U'.charCodeAt(0)) ){
				Action();
				return false;
			}
		}
	},

	ClearContent: () => {
		document.write('');
		document.close();
	},

	SetDesignMode: (Mode) => {
		if(Mode.toLowerCase() == 'on')
			document.designMode = 'on';
		else
			document.designMode = 'off';
	},

	CheckNodeID: (Node) => {
		if(!Node.id){
			const RandomID = SnakeAlgorithms.StringGenerator(8);
			Node.setAttribute('id', RandomID);
			return RandomID;
		}
		return Node.id;
	},

	RemoveNodes: (QueryMode = 'All', Identifier) => {
		if(QueryMode.toLowerCase() == 'normal')
			SnakeDom.QuerySelector(Identifier).remove();
		else
			SnakeDOM.QuerySelectorAll(Identifier).remove();
	}
};

const SnakeUtilities = {
	HandleHTTPRequest: ({
		URL, Token = '', Method = 'GET', Headers = {}, 
		Debug = false, OnFetch = function(){}, OnConnect = function(){}, 
		OnError = function(){}
	}) => {
		Headers = SnakeAlgorithms.MergeObject({
			'Authorization': `${Token}`
		}, Headers);

		OnConnect();

		const Connection = new Request(URL, {
			method: Method,
			headers: Headers,
			mode: 'cors',
			cache: 'default'
		});
		
		if(Debug)
			console.warn(`Connection made to [${URL}] using method [${Method}].`);
		
		fetch(Connection)
			.then((Response) => Response.json())
			.then((Data) => OnFetch(Data))
			.catch((Data) => {
				OnError(Data);
				console.error(`[Error]: (Fetch ${URL}[${Method}]) [Error: ${Data}]`);
			});
	}
};

const SnakeClient = {
	GetNetworkType: () => clientInformation.connection,
	GetBrowserName: () => navigator.appCodeName,
	GetBrowserVersion: () => navigator.appVersion,
	GetCookiesStatus: () => navigator.cookieEnabled,
	GetCurrentPath: () => window.location.pathname,
	OnBeforePrint: (Action) => window.addEventListener('beforeprint', Action),
	GoBack: () => window.history.back(),
	GetHash: () => location.hash,
	SetHash: (Hash) => location.hash = Hash,
	AddHash: (Hash) => location.hash += Hash,
	CloseWindow: () => open(location, '_self').close(),
	GetLanguage: () => navigator.language,
	IsOnLine: () => navigator.onLine,
	GetPlatform: () => navigator.platform,
	GetEngine: () => navigator.product,
	GetUserAgent: () => navigator.userAgent,
	GetScreenAvailableHeight: () => screen.availHeight,
	GetScreenAvailableWidth: () => screen.availWidth,
	GetScreenPixelDepth: () => screen.pixelDepth,
	GetScreenColorDepth: () => screen.colorDepth,
	Redirect: (URL) => location.replace(URL),
	Reload: () => location.reload(),
	GetScreenHeight: () => window.innerHeight,
	GetScreenWidth: () => window.innerWidth,
	Alert: (Message) => alert(Message),
	PromptBox: (Message, DefaultAnswer) => window.prompt(Message, DefaultAnswer),
	GetFullScreenStatus: () => document.fullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
	GetDocumentCookies: () => document.cookie,
	OpenPage: (URL) => window.open(URL),
	LoadStatus: () => document.readyState,
	OnOffLine: (Action) => window.addEventListener('offline', Action),
    OnOnLine: (Action) => window.addEventListener('online', Action),
    GetLocation: (Action) => (navigator.geolocation) ? navigator.geolocation.getCurrentPosition((Position) => Action(Position)) : console.log('Geolocation is not supported by this browser.'),

	DeleteCookie: (CookieName) => SnakeClient.UpdateCookie(CookieName, '', {
		'max-age': -1,
	}),
	
	SetPath: (Path) => {
		if (window.location.pathname != '/') history.replaceState({}, '', document.location.origin)
		history.pushState({}, '', Path);
	},

	OpenTab: (NewTabContent = '') => {
		const Tab = window.open();
		Tab.document.open();
		Tab.document.write(NewTabContent);
        return Tab;
	},

	SetCookie: ({
		Name, Value, Priority = '', Path = '', Domain = window.location.hostname, 
        MaxAge = '', Secure = true, SameParty = false, SameSite = false
	}) => {
		let Cookie = `${Name}=${Value};path=${Path};max-age=${MaxAge};priority=${Priority};domain=${Domain}`;
		if(Secure)
            Cookie += `;secure`;
        if(SameSite != '')
            Cookie += `;samesite=${samesite}`;
        if(SameParty != '')
            cookie += `;sameparty=${sameparty}`;
		document.cookie = Cookie;
	},

	GetCookie: (Name) => {
		const Matches = document.cookie.match(
				new RegExp("(?:^|; )" + Name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")
			),
			Cookie = Matches ? decodeURIComponent(Matches[1]) : undefined;
		if(Cookie == undefined) 
            return false;
		return Cookie;
	},

	UpdateCookie: (Name, Value, Options = {}) => {
        if(Options.expires instanceof Date)
            Options.expires = Options.expires.toUTCString();
		let UpdatedCookie = encodeURIComponent(Name) + '=' + encodeURIComponent(Value);
		for(let OptionKey in Options){
			UpdatedCookie += ';' + OptionKey;
			let OptionValue = Options[OptionKey];
            if(OptionValue !== true)
                UpdatedCookie += '=' + OptionValue;
		}
		document.cookie = UpdatedCookie;
	}
};

/*
	? ZendaJS Z8 Implementation
	? https://github.com/codewithrodi/ZendaJS/

	* The Z8 is an extension of objects already defined 
	* in javascript by the V8 engine in C++, what Z8 offers 
	* are new functionality such as search methods, ordering 
	* methods, new mathematical algorithms and new 
	* functionalities for strings, explore!
*/
Object.defineProperties(Math.__proto__, {
	'Factorial': {
		value: function(PositiveNumber){
			return SnakeAlgorithms.Factorial(PositiveNumber);
		},
		writable: false
	},

	'Fibonacci': {
		value: function(MaxIteration){
			return SnakeAlgorithms.Fibonacci(MaxIteration);
		},
		writable: false
	},

	'PrimeFactors': {
		value: function(Integer){
			return SnakeAlgorithms.PrimeFactors(Integer);
		},
		writable: false
	},

	'IsPrime': {
		value: function(Integer){
			return SnakeAlgorithms.IsPrime(Integer);
		},
		writable: false
	},

	'RandomInteger': {
		value: function(MinimumValue, MaximumValue){
			return SnakeAlgorithms.RandomInteger(MinimumValue, MaximumValue);
		},
		writable: false
	},

	'RandomNumber': {
		value: function(MaximumValue, MinimumValue){
			return SnakeAlgorithms.RandomNumber(MaximumValue, MinimumValue);
		},
		writable: false
	}
});

Object.defineProperties(String.prototype, {
	'SubStringCount': {
		value: function(SubString){
			return SnakeAlgorithms.SubStringCount(this, SubString);
		},
		writable: false
	},

	'HammingDistance': {
		value: function(StringToCompare){
			return SnakeAlgorithms.HammingDistance(this, StringToCompare);
		},
		writable: false
	},

	'RandomFill': {
		value: function(Length = 8, Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'){
			return SnakeAlgorithms.StringGenerator(Length, Characters);
		},
		writable: false
	}
});

Object.defineProperties(Array.prototype, {
	'LinearSearch': {
		value: function(Value){
			return SnakeAlgorithms.LinearSearch(Value, this);
		},
		writable: false
	},

	'InterpolationSearch': {
		value: function(Value){
			return SnakeAlgorithms.InterpolationSearch(Value, this);
		},
		writable: false
	},

	'BinarySearch': {
		value: function(Value){
			return SnakeAlgorithms.BinarySearch(Value, this);
		},
		writable: false
	},

	'Average': {
		value: function(){
			return SnakeAlgorithms.Average(this);
		},
		writable: false
	},

	'MaximumValue': {
		value: function(){
			return SnakeAlgorithms.MaximumValue(this);
		},
		writable: false
	},

	'MinimumValue': {
		value: function(){
			return SnakeAlgorithms.MinimumValue(this);
		},
		writable: false
	},

	'InsertionSort': {
		value: function(){
			return SnakeAlgorithms.InsertionSort(this);
		},
		writable: false
	},

	'SelectionSort': {
		value: function(){
			return SnakeAlgorithms.SelectionSort(this);
		},
		writable: false
	},

	'BubbleSort': {
		value: function(){
			return SnakeAlgorithms.BubbleSort(this);
		},
		writable: false
	},

	'Shuffle': {
		value: function(){
			return SnakeAlgorithms.Shuffle(this);
		},
		writable: false
	}
});

class SnakeNode{
    constructor(Node, GetMethod = 'id'){
        this.Node = this.GetElement(Node, GetMethod);
        this.Style = this.Node.style;
        if(this.Node == undefined)
            console.log(`The element [<${dom_element}> required using <${method.toUpperCase()}>] was not found in the DOM.`);
    }

    OnInput = (Action) => this.Node.addEventListener('input', Action);
    OnInvalid = (Action) => this.Node.addEventListener('invalid', Action);
    OnSubmit = (Action) => this.Node.addEventListener('submit', Action);
	OnClick = (Action) => this.Node.addEventListener('click', Action);
	OnMouseOver = (Action) => this.Node.addEventListener('mouseover', Action);
	OnMouseOut = (Action) => this.Node.addEventListener('mouseout', Action);
	OnMouseMove = (Action) => this.Node.addEventListener('mousemove', Action);
	OnMouseLeave = (Action) => this.Node.addEventListener('mouseleave', Action);
	OnMouseEnter = (Action) => this.Node.addEventListener('mouseenter', Action);
	OnMouseWheel = (Action) => this.Node.addEventListener('mousewheel', Action);
	OnMouseUp = (Action) => this.Node.addEventListener('mouseup', Action);
	OnBlur = (Action) => this.Node.addEventListener('blur', Action);
	OnContextMenu = (Action) => this.Node.addEventListener('blur', Action);
	OnChange = (Action) => this.Node.addEventListener('change', Action);
	OnDoubleClick = (Action) => this.Node.addEventListener('dblclick', Action);
	OnFocus = (Action) => this.Node.addEventListener('focus', Action);
	OnKeyDown = (Action) => this.Node.addEventListener('keydown', Action);
	OnKeyPress = (Action) => this.Node.addEventListener('keypress', Action);
	OnKeyUp = (Action) => this.Node.addEventListener('keyup', Action);
	OnLoad = (Action) => this.Node.addEventListener('load', Action);
	OnMouseDown = (Action) => this.Node.addEventListener('mousedown', Action);
	OnReset = (Action) => this.Node.addEventListener('reset', Action);
	OnSelect = (Action) => this.Node.addEventListener('select', Action);
	OnAnimationEnd = (Action) => this.Node.addEventListener('animationend', Action);
	OnAnimationIteration = (Action) => this.Node.addEventListener('animationiteration', Action);
	OnAnimationStart = (Action) => this.Node.addEventListener('animationstart', Action);
	OnDrag = (Action) => this.Node.addEventListener('drag', Action);
	OnDragEnd = (Action) => this.Node.addEventListener('dragend', Action);
	OnDragLeave = (Action) => this.Node.addEventListener('dragleave', Action);
	OnDragOver = (Action) => this.Node.addEventListener('dragover', Action);
	OnDragStart = (Action) => this.Node.addEventListener('dragstart', Action);
	OnDrop = (Action) => this.Node.addEventListener('drop', Action);
	OnDragEnter = (Action) => this.Node.addEventListener('dragenter', Action);
	OnTouchStart = (Action) => this.Node.addEventListener('touchstart', Action);
	OnTouchMove = (Action) => this.Node.addEventListener('touchmove', Action);
	OnTouchEnd = (Action) => this.Node.addEventListener('touchend', Action);
	OnTouchCancel = (Action) => this.Node.addEventListener('touchcancel', Action);
	OnReadyStateChange = (Action) => this.Node.addEventListener('readystatechange', Action);
	OnCopy = (Action) => this.Node.addEventListener('copy', Action);
	OnCut = (Action) => this.Node.addEventListener('cut', Action);
	OnPaste = (Action) => this.Node.addEventListener('paste', Action);
	OnBeforeScriptExecute = (Action) => this.Node.addEventListener('beforescriptexecute', Action);
	OnAfterScriptExecute = (Action) => this.Node.addEventListener('afterscriptexecute', Action);
	OnCanPlay = (Action) => this.Node.addEventListener('canplay', Action);
	OnCanPlayThrough = (Action) => this.Node.addEventListener('canplaythrough', Action);
	OnDurationChange = (Action) => this.Node.addEventListener('durationchange', Action);
	OnEmptied = (Action) => this.Node.addEventListener('emptied', Action);
	OnLoadedData = (Action) => this.Node.addEventListener('loadeddata', Action);
	OnLoadedMetaData = (Action) => this.Node.addEventListener('loadedmetadata', Action);
	OnLoadStart = (Action) => this.Node.addEventListener('loadstart', Action);
	OnPause = (Action) => this.Node.addEventListener('pause', Action);
	OnPlay = (Action) => this.Node.addEventListener('play', Action);
	OnPlaying = (Action) => this.Node.addEventListener('playing', Action);
	OnProgress = (Action) => this.Node.addEventListener('progress', Action);
	OnRateChange = (Action) => this.Node.addEventListener('ratechange', Action);
	OnSeeked = (Action) => this.Node.addEventListener('seeked', Action);
	OnSeeking = (Action) => this.Node.addEventListener('seeking', Action);
	OnShow = (Action) => this.Node.addEventListener('show', Action);
	OnStalled = (Action) => this.Node.addEventListener('stalled', Action);
	OnSuspend = (Action) => this.Node.addEventListener('suspend', Action);
	OnTimeUpdate = (Action) => this.Node.addEventListener('timeupdate', Action);
	OnVolumeChange = (Action) => this.Node.addEventListener('volumechange', Action);
	OnError = (Action) => this.Node.addEventListener('error', Action);
	OnScroll = (Action) => this.Node.addEventListener('scroll', Action);

	AlignContent = (Value) => this.Style.alignContent = Value;
	AlignItems = (Value) => this.Style.alignItems = Value;
	AlignmentBaseLine = (Value) => this.Style.alignmentBaseLine = Value;
	All = (Value) => this.Style.all = Value;
	Animation = (Value) => this.Style.animation = Value;
	AnimationDelay = (Value) => this.Style.animationDelay = Value;
	AnimationDirection = (Value) => this.Style.animationDirection = Value;
	AnimationFillMode = (Value) => this.Style.animatonFillMode = Value;
	AnimationIterationCount = (Value) => this.Style.animationIterationCount = Value;
	AnimationName = (Value) => this.Style.animationName = Value;
	AnimationPlayState = (Value) => this.Style.animationPlayState = Value;
	AnimationTimingFunction = (Value) => this.Style.animationTimingFunction = Value;
	Appearance = (Value) => this.Style.appearance = Value;
	AscentOverride = (Value) => this.Style.ascentOverride = Value;
	AspectRatio = (Value) => this.Style.aspectRatio = Value;

	BackdropFilter = (Value) => this.Style.backdropFilter = Value;
	BackfaceVisibility = (Value) => this.Style.backfaceVisibility = Value;
	Background = (Value) => this.Style.background = Value;
	BackgroundAttachment = (Value) => this.Style.backgroundAttachment = Value;
	BackgroundBlendMode = (Value) => this.Style.backgroundBlendMode = Value;
	BackgroundClip = (Value) => this.Style.backgroundClip = Value;
	BackgroundColor = (Value) => this.Style.backgroundColor = Value;
	BackgroundImage = (Value) => this.Style.backgroundImage = Value;
	BackgroundOrigin = (Value) => this.Style.backgroundOrigin = Value;
	BackgroundPosition = (Value) => this.Style.backgroundPosition = Value;
	BackgroundPositionX = (Value) => this.Style.backgroundPositionX = Value;
	BackgroundPositionY = (Value) => this.Style.backgroundPositionY = Value;
	BackgroundRepeat = (Value) => this.Style.backgroundRepeat = Value;
	BackgroundRepeatX = (Value) => this.Style.backgroundRepeatX = Value;
	BackgroundRepeatY = (Value) => this.Style.backgroundRepeatY = Value;
	BackgroundSize = (Value) => this.Style.backgroundSize = Value;
	BaselineShift = (Value) => this.Style.baselineShift = Value;
	BlockSize = (Value) => this.Style.blockSize = Value;
	Border = (Value) => this.Style.border = Value;
	BorderBlock = (Value) => this.Style.borderBlock = Value;
	BorderBlockColor = (Value) => this.Style.borderBlockColor = Value;
	BorderBlockEnd = (Value) => this.Style.borderBlockEnd = Value;
	BorderBlockEndColor = (Value) => this.Style.borderBlockEndColor = Value;
	BorderBlockEndWidth = (Value) => this.Style.borderBlockEndWidth = Value;
	BorderBlockStart = (Value) => this.Style.borderBlockStart = Value;
	BorderBlockStartColor = (Value) => this.Style.borderBlockStartColor = Value;
	BorderBlockStartStyle = (Value) => this.Style.borderBlockStartStyle = Value;
	BorderBlockStartWidth = (Value) => this.Style.borderBlockStartWidth = Value;
	BorderBlockStyle = (Value) => this.Style.borderBlockStyle = Value;
	BorderBlockWidth = (Value) => this.Style.borderBlockWidth = Value;
	BorderBottom = (Value) => this.Style.borderBottom = Value;
	BorderBottomColor = (Value) => this.Style.borderBottomColor = Value;
	BorderBottomLeftRadius = (Value) => this.Style.borderBottomLeftRadius = Value;
	BorderBottomRightRadius = (Value) => this.Style.borderBottomRightRadius = Value;
	BorderBottomStyle = (Value) => this.Style.borderBottomStyle = Value;
	BorderBottomWidth = (Value) => this.Style.borderBottomWidth = Value;
	BorderCollapse = (Value) => this.Style.borderCollapse = Value;
	BorderColor = (Value) => this.Style.borderColor = Value;
	BorderEndEndRadius = (Value) => this.Style.borderEndEndRadius = Value;
	BorderEndStartRadius = (Value) => this.Style.borderEndStartRadius = Value;
	BorderImage = (Value) => this.Style.borderImage = Value;
	BorderImageOutset = (Value) => this.Style.borderImageOutset = Value;
	BorderImageRepeat = (Value) => this.Style.borderImageRepeat = Value;
	BorderImageSource = (Value) => this.Style.borderImageSource = Value;
	BorderImageWidth = (Value) => this.Style.borderImageWidth = Value;
	BorderInline = (Value) => this.Style.borderInline = Value;
	BorderInlineColor = (Value) => this.Style.borderInlineColor = Value;
	BorderInlineEnd = (Value) => this.Style.borderInlineEnd = Value;
	BorderInlineEndColor = (Value) => this.Style.borderInlineEndColor = Value;
	BorderInlineEndStyle = (Value) => this.Style.borderInlineEndStyle = Value;
	BorderInlineWidth = (Value) => this.Style.borderInlineWidth = Value;
	BorderInlineStart = (Value) => this.Style.borderInlineStart = Value;
	BorderInlineStartColor = (Value) => this.Style.borderInlineStartColor = Value;
	BorderInlineStartStyle = (Value) => this.Style.borderInlineStartStyle = Value;
	BorderInlineStartWidth = (Value) => this.Style.borderInlineStartWidth = Value;
	BorderInlineStyle = (Value) => this.Style.borderInlineStyle = Value;
	BorderInlineWidth = (Value) => this.Style.borderInlineWidth = Value;
	BorderLeft = (Value) => this.Style.borderLeft = Value;
	BorderLeftColor = (Value) => this.Style.borderLeftColor = Value;
	BorderLeftStyle = (Value) => this.Style.borderLeftStyle = Value;
	BorderLeftWidth = (Value) => this.Style.borderLeftWidth = Value;
	BorderRadius = (Value) => this.Style.borderRadius = Value;
	BorderRight = (Value) => this.Style.borderRight = Value;
	BorderRightColor = (Value) => this.Style.borderRightColor = Value;
	BorderRightStyle = (Value) => this.Style.borderRightStyle = Value;
	BorderRightWidth = (Value) => this.Style.borderRightWidth = Value;
	BorderSpacing = (Value) => this.Style.borderSpacing = Value;
	BorderStartEndRadius = (Value) => this.Style.borderStartEndRadius = Value;
	BorderStartStartRadius = (Value) => this.Style.borderStartStartRadius = Value;
	BorderStyle = (Value) => this.Style.borderStyle = Value;
	BorderTop = (Value) => this.Style.borderTop = Value;
	BorderTopColor = (Value) => this.Style.borderTopColor = Value;
	BorderTopLeftRadius = (Value) => this.Style.borderTopLeftRadius = Value;
	BorderTopRightRadius = (Value) => this.Style.borderTopRightRadius = Value;
	BorderTopStyle = (Value) => this.Style.borderTopStyle = Value;
	BorderTopWidth = (Value) => this.Style.borderTopWidth = Value;
	BorderWidth = (Value) => this.Style.borderWidth = Value;
	BoxShadow = (Value) => this.Style.boxShadow = Value;
	BoxSizing = (Value) => this.Style.boxSizing = Value;
	BreakAfter = (Value) => this.Style.breakAfter = Value;
	BreakBefore = (Value) => this.Style.breakBefore = Value;
	BreakInside = (Value) => this.Style.breakInside = Value;
	BufferedRendering = (Value) => this.Style.bufferedRendering = Value;
	Bottom = (Value) => this.Style.bottom = Value;

	CaptionSide = (Value) => this.Style.captionSide = Value;
	CaretColor = (Value) => this.Style.caretColor = Value;
	Clear = (Value) => this.Style.clear = Value;
	Clip = (Value) => this.Style.clip = Value;
	ClipPath = (Value) => this.Style.clipPath = Value;
	ClipRule = (Value) => this.Style.clipRule = Value;
	Color = (Value) => this.Style.color = Value;
	ColorInterpolation = (Value) => this.Style.colorInterpolation = Value;
	ColorInterpolationFilters = (Value) => this.Style.colorInterpolationFilters = Value;
	ColorRendering = (Value) => this.Style.colorRendering = Value;
	ColorScheme = (Value) => this.Style.colorScheme = Value;
	ColumnCount = (Value) => this.Style.columnCount = Value;
	ColumnFill = (Value) => this.Style.columnFill = Value;
	ColumnGap = (Value) => this.Style.columnGap = Value;
	ColumnRule = (Value) => this.Style.columnRule = Value;
	ColumnRuleColor = (Value) => this.Style.columnRuleColor = Value;
	ColumnRuleStyle = (Value) => this.Style.columnRuleStyle = Value;
	ColumnRuleWidth = (Value) => this.Style.columnRuleWidth = Value;
	ColumnSpan = (Value) => this.Style.columnSpan = Value;
	ColumnWidth = (Value) => this.Style.columnWidth = Value;
	Columns = (Value) => this.Style.columns = Value;
	Contain = (Value) => this.Style.contain = Value;
	ContainIntrinsicSize = (Value) => this.Style.containIntrinsicSize = Value;
	Content = (Value) => this.Style.content = Value;
	CounterIncrement = (Value) => this.Style.counterIncrement = Value;
	ContentVisibility = (Value) => this.Style.contentVisibility = Value;
	CounterReset = (Value) => this.Style.counterReset = Value;
	CounterSet = (Value) => this.Style.counterSet = Value;
	Cursor = (Value) => this.Style.cursor = Value;
	Cx = (Value) => this.Style.cx = Value;
	Cy = (Value) => this.Style.cy = Value;

	D = (Value) => this.Style.d = Value;
	DescentOverride = (Value) => this.Style.descentOverride = Value;
	Direction = (Value) => this.Style.direction = Value;
	Display = (Value) => this.Style.display = Value;
	DominantBaseline = (Value) => this.Style.dominantBaseline = Value;

	EmptyCells = (Value) => this.Style.emptyCells = Value;
	EpubCaptionSide = (Value) => this.Style.epubCaptionSide = Value;
	EpubTextCombine = (Value) => this.Style.epubTextCombine = Value;
	EpubTextEmphasis = (Value) => this.Style.epubTextEmphasis = Value;
	EpubTextEmphasisColor = (Value) => this.Style.epubTextEmphasisColor = Value;
	EpubTextOrientation = (Value) => this.Style.epubTextOrientation = Value;
	EpubTextTransform = (Value) => this.Style.epubTextTransform = Value;
	EpubWordBreak = (Value) => this.Style.epubWordBreak = Value;
	EpubWritingMode = (Value) => this.Style.epubWritingMode = Value;

	Fill = (Value) => this.Style.fill = Value;
	FillOpacity = (Value) => this.Style.fillOpacity = Value;
	FillRule = (Value) => this.Style.fillRule = Value;
	Filter = (Value) => this.Style.filter = Value;
	Flex = (Value) => this.Style.flex = Value;
	FlexBasis = (Value) => this.Style.flexBasis = Value;
	FlexDirection = (Value) => this.Style.flexDirection = Value;
	FlexFlow = (Value) => this.Style.flexFlow = Value;
	FlexGrow = (Value) => this.Style.flexGrow = Value;
	FlexWrap = (Value) => this.Style.flexWrap = Value;
	Float = (Value) => this.Style.float = Value;
	FloodColor = (Value) => this.Style.floodColor = Value;
	FloodOpacity = (Value) => this.Style.floodOpacity = Value;
	Font = (Value) => this.Style.font = Value;
	FontDisplay = (Value) => this.Style.fontDisplay = Value;
	FontFamily = (Value) => this.Style.fontFamily = Value;
	FontFeatureSettings = (Value) => this.Style.fontFeatureSettings = Value;
	FontKerning = (Value) => this.Style.fontKerning = Value;
	FontOpticalSizing = (Value) => this.Style.fontOpticalSizing = Value;
	FontSize = (Value) => this.Style.fontSize = Value;
	FontStretch = (Value) => this.Style.fontStretch = Value;
	FontStyle = (Value) => this.Style.fontStyle = Value;
	FontVariant = (Value) => this.Style.fontVariant = Value;
	FontVariantCaps = (Value) => this.Style.fontVariantCaps = Value;
	FontVariantEastAsian = (Value) => this.Style.fontVariantEastAsian = Value;
	FontVariantLigatures = (Value) => this.Style.fontVariantLigatures = Value;
	FontVariantNumeric = (Value) => this.Style.fontVariantNumeric = Value;
	FontVariationSetting = (Value) => this.Style.fontVariationSetting = Value;
	FontWeight = (Value) => this.Style.fontWeight = Value;
	ForcedColorAdjust = (Value) => this.Style.forcedColorAdjust = Value;

	Gap = (Value) => this.Style.gap = Value;
	Grid = (Value) => this.Style.grid = Value;
	GridArea = (Value) => this.Style.gridArea = Value;
	GridAutoColumns = (Value) => this.Style.gridAutoColumns = Value;
	GridAutoFlow = (Value) => this.Style.gridAutoFlow = Value;
	GridAutoRows = (Value) => this.Style.gridAutoRows = Value;
	GridColumn = (Value) => this.Style.gridColumn = Value;
	GridColumnEnd = (Value) => this.Style.gridColumnEnd = Value;
	GridColumnGap = (Value) => this.Style.gridColumnGap = Value;
	GridColumnStart = (Value) => this.Style.gridColumnStart = Value;
	GridGap = (Value) => this.Style.gridGap = Value;
	GridRow = (Value) => this.Style.gridRow = Value;
	GridRowEnd = (Value) => this.Style.gridRowEnd = Value;
	GridRowGap = (Value) => this.Style.gridRowGap = Value;
	GridRowStart = (Value) => this.Style.gridRowStart = Value;
	GridTemplate = (Value) => this.Style.gridTemplate = Value;
	GridTemplateAreas = (Value) => this.Style.gridTemplateAreas = Value;
	GridTemplateColumns = (Value) => this.Style.gridTemplateColumns = Value;
	GridTemplateRows = (Value) => this.Style.gridTemplateRows = Value;

	Height = (Value) => this.Style.height = Value;
	Hyphens = (Value) => this.Style.hyphens = Value;

	ImageOrientation = (Value) => this.Style.imageOrientation = Value;
	ImageRendering = (Value) => this.Style.imageRendering = Value;
	Inherits = (Value) => this.Style.inherits = Value;
	InitialValue = (Value) => this.Style.initialValue = Value;
	InlineSize = (Value) => this.Style.inlineSize = Value;
	Inset = (Value) => this.Style.inset = Value;
	InsetBlock = (Value) => this.Style.insetBlock = Value;
	InsetBlockEnd = (Value) => this.Style.insetBlockEnd = Value;
	InsetBlockStart = (Value) => this.Style.insetBlockStart = Value;
	InsetInline = (Value) => this.Style.insetInline = Value;
	InsetInlineEnd = (Value) => this.Style.insetInlineEnd = Value;
	InsetInlineStart = (Value) => this.Style.insetInlineStart = Value;
	Isolation = (Value) => this.Style.isolation = Value;

	JustifyContent = (Value) => this.Style.justifyContent = Value;
	JustifyItems = (Value) => this.Style.justifyItems = Value;
	JustifySelf = (Value) => this.Style.justifySelf = Value;

	Left = (Value) => this.Style.left = Value;
	LetterSpacing = (Value) => this.Style.letterSpacing = Value;
	LightingColor = (Value) => this.Style.lightingColor = Value;
	LineBreak = (Value) => this.Style.lineBreak = Value;
	LineGapOverride = (Value) => this.Style.lineGapOverride = Value;
	LineHeight = (Value) => this.Style.lineHeight = Value;
	ListStyle = (Value) => this.Style.listStyle = Value;
	ListStyleImage = (Value) => this.Style.listStyleImage = Value;
	ListStylePosition = (Value) => this.Style.listStylePosition = Value;
	ListStyleType = (Value) => this.Style.listStyleType = Value;

	Margin = (Value) => this.Style.margin = Value;
	MarginBlock = (Value) => this.Style.marginBlock = Value;
	MarginBlockEnd = (Value) => this.Style.marginBlockEnd = Value;
	MarginBlockStart = (Value) => this.Style.marginBlockStart = Value;
	MarginBottom = (Value) => this.Style.marginBottom = Value;
	MarginInline = (Value) => this.Style.marginInline = Value;
	MarginInlineEnd = (Value) => this.Style.marginInlineEnd = Value;
	MarginInlineStart = (Value) => this.Style.marginInlineStart = Value;
	MarginLeft = (Value) => this.Style.marginLeft = Value;
	MarginRight = (Value) => this.Style.marginRight = Value;
	MarginTop = (Value) => this.Style.marginTop = Value;
	Marker = (Value) => this.Style.marker = Value;
	MarkerEnd = (Value) => this.Style.markerEnd = Value;
	MarkerMid = (Value) => this.Style.markerMid = Value;
	MarkerStart = (Value) => this.Style.markerStart = Value;
	Mask = (Value) => this.Style.mask = Value;
	MaskType = (Value) => this.Style.maskType = Value;
	MaxBlockSize = (Value) => this.Style.maxBlockSize = Value;
	MaxHeight = (Value) => this.Style.maxHeight = Value;
	MaxInlineSize = (Value) => this.Style.maxInlineSize = Value;
	MaxWidth = (Value) => this.Style.maxWidth = Value;
	MaxZoom = (Value) => this.Style.maxZoom = Value;
	MinBlockSize = (Value) => this.Style.minBlockSize = Value;
	MinHeight = (Value) => this.Style.minHeight = Value;
	MinInlineSize = (Value) => this.Style.minInlineSize = Value;
	MinWidth = (Value) => this.Style.minWidth = Value;
	MinZoom = (Value) => this.Style.minZoom = Value;
	MixBlendMode = (Value) => this.Style.mixBlendMode = Value;

	ObjectFit = (Value) => this.Style.objectFit = Value;
	ObjectPosition = (Value) => this.Style.objectPosition = Value;
	Offset = (Value) => this.Style.offset = Value;
	OffsetDistance = (Value) => this.Style.offsetDistance = Value;
	OffsetPath = (Value) => this.Style.offsetPath = Value;
	OffsetRotate = (Value) => this.Style.offsetRotate = Value;
	Opacity = (Value) => this.Style.opacity = Value;
	Order = (Value) => this.Style.order = Value;
	Orientation = (Value) => this.Style.orientation = Value;
	Orphans = (Value) => this.Style.orphans = Value;
	Outline = (Value) => this.Style.outline = Value;
	OutlineColor = (Value) => this.Style.outlineColor = Value;
	OutlineOffset = (Value) => this.Style.outlineOffset = Value;
	OutlineStyle = (Value) => this.Style.outlineStyle = Value;
	OutlineWidth = (Value) => this.Style.outlineWidth = Value;
	Overflow = (Value) => this.Style.overflow = Value;
	OverflowAnchor = (Value) => this.Style.overflowAncho = Value;
	OverflowClipMargin = (Value) => this.Style.overflowClipMargin = Value;
	OverflowWrap = (Value) => this.Style.overflowWrap = Value;
	OverflowX = (Value) => this.Style.overflowX = Value;
	OverflowY = (Value) => this.Style.overflowY = Value;
	OverscrollBehavior = (Value) => this.Style.overscrollBehavior = Value;
	OverscrollBehaviorBlock = (Value) => this.Style.overscrollBehaviorBlock = Value;
	OverscrollBehaviorInline = (Value) => this.Style.overscrollBehaviorInline = Value;
	OverscrollBehaviorX = (Value) => this.Style.overscrollBehaviorX = Value;
	OverscrollBehaviorY = (Value) => this.Style.overscrollBehaviorY = Value;

	Padding = (Value) => this.Style.padding = Value;
	PaddingBlock = (Value) => this.Style.paddingBlock = Value;
	PaddingBlockEnd = (Value) => this.Style.paddingBlockEnd = Value;
	PaddingBlockStart = (Value) => this.Style.paddingBlockStart = Value;
	PaddingBottom = (Value) => this.Style.paddingBottom = Value;
	PaddingInline = (Value) => this.Style.paddingInline = Value;
	PaddingInlineEnd = (Value) => this.Style.paddingInlineEnd = Value;
	PaddingInlineStart = (Value) => this.Style.paddingInlineStart = Value;
	PaddingLeft = (Value) => this.Style.paddingLeft = Value;
	PaddingRight = (Value) => this.Style.paddingRight = Value;
	PaddingTop = (Value) => this.Style.paddingTop = Value;
	Page = (Value) => this.Style.page = Value;
	PageBreakAfter = (Value) => this.Style.pageBreakAfter = Value;
	PageBreakBefore = (Value) => this.Style.pageBreakBefore = Value;
	PageBreakInside = (Value) => this.Style.pageBreakInside = Value;
	PageOrientation = (Value) => this.Style.pageOrientation = Value;
	PaintOrder = (Value) => this.Style.paintOrder = Value;
	Perspective = (Value) => this.Style.perspective = Value;
	PerspectiveOrigin = (Value) => this.Style.perspectiveOrigin = Value;
	PlaceContent = (Value) => this.Style.placeContent = Value;
	PlaceItems = (Value) => this.Style.placeItems = Value;
	PlaceSelf = (Value) => this.Style.placeSelf = Value;
	PointerEvents = (Value) => this.Style.pointerEvents = Value;
	Position = (Value) => this.Style.position = Value;
	Quotes = (Value) => this.Style.quotes = Value;

	R = (Value) => this.Style.r = Value;
	Resize = (Value) => this.Style.resize = Value;
	Right = (Value) => this.Style.right = Value;
	RowGap = (Value) => this.Style.rowGap = Value;
	RubyPosition = (Value) => this.Style.rubyPosition = Value;
	Rx = (Value) => this.Style.rx = Value;
	Ry = (Value) => this.Style.ry = Value;

	ScrollBehavior = (Value) => this.Style.scrollBehavior = Value;
	ScrollMargin = (Value) => this.Style.scrollMargin = Value;
	ScrollMarginBlock = (Value) => this.Style.scrollMarginBlock = Value;
	ScrollMarginBlockEnd = (Value) => this.Style.scrollMarginBlockEnd = Value;
	ScrollMarginBlockStart = (Value) => this.Style.scrollMarginBlockstart = Value;
	ScrollMarginBottom = (Value) => this.Style.scrollMarginBottom = Value;
	ScrollMarginInline = (Value) => this.Style.scrollMarginInline = Value;
	ScrollMarginInlineEnd = (Value) => this.Style.scrollMarginInlineEnd = Value;
	ScrollMarginInlineStart = (Value) => this.Style.scrollmarginInlineStart = Value;
	ScrollMarginLeft = (Value) => this.Style.scrollMarginLeft = Value;
	ScrollMarginRight = (Value) => this.Style.scrollMarginRight = Value;
	ScrollMarginTop = (Value) => this.Style.scrollMarginTop = Value;
	ScrollPadding = (Value) => this.Style.scrollPadding = Value;
	ScrollPaddingBlock = (Value) => this.Style.scrollPaddingBlock = Value;
	ScrollPaddingBlockEnd = (Value) => this.Style.scrollPaddingBlockEnd = Value;
	ScrollPaddingBlockStart = (Value) => this.Style.scrollPaddingBlockStart = Value;
	ScrollPaddingBottom = (Value) => this.Style.scrollPaddingBottom = Value;
	ScrollPaddingInline = (Value) => this.Style.scrollPaddingInline = Value;
	ScrollPaddingInlineEnd = (Value) => this.Style.scrollPaddingInlineEnd = Value;
	ScrollPaddingInlineStart = (Value) => this.Style.scrollPaddingInlineStart = Value;
	ScrollPaddingLeft = (Value) => this.Style.scrollPaddingLeft = Value;
	ScrollPaddingRight = (Value) => this.Style.scrollPaddingRight = Value;
	ScrollPaddingTop = (Value) => this.Style.scrollPaddingTop = Value;
	ScrollSnapAlign = (Value) => this.Style.scrollSnapAlign = Value;
	ScrollSnapStop = (Value) => this.Style.scrollSnapStop = Value;
	ScrollSnapType = (Value) => this.Style.scrollSnapType = Value;
	ShapeImageThreshold = (Value) => this.Style.shapeImaheThreshold = Value;
	ShapeMargin = (Value) => this.Style.shapeMargin = Value;
	ShapeOutside = (Value) => this.Style.shapeOutside = Value;
	ShapeRendering = (Value) => this.Style.shapeRendering = Value;
	Size = (Value) => this.Style.size = Value;
	Speak = (Value) => this.Style.speak = Value;
	Src = (Value) => this.Style.src = Value;
	StopColor = (Value) => this.Style.stopColor = Value;
	StopOpacity = (Value) => this.Style.stopOpacity = Value;
	Stroke = (Value) => this.Style.stroke = Value;
	StrokeDasharray = (Value) => this.Style.strokeDasharray = Value;
	StrokeDashoffset = (Value) => this.Style.strokeDashoffset = Value;
	StrokeLinecap = (Value) => this.Style.strokeLinecap = Value;
	StrokeLinejoin = (Value) => this.Style.strokeLinejoin = Value;
	StrokeMiterlimit = (Value) => this.Style.strokeMiterlimit = Value;
	StrokeOpacity = (Value) => this.Style.strokeOpacity = Value;
	StrokeWidth = (Value) => this.Style.strokeWidth = Value;
	Syntax = (Value) => this.Style.syntax = Value;

	TabSize = (Value) => this.Style.tabSize = Value;
	TableLayout = (Value) => this.Style.tableLayout = Value;
	TextAlign = (Value) => this.Style.textAlign = Value;
	TextAlignLast = (Value) => this.Style.textAlignLast = Value;
	TextAnchor = (Value) => this.Style.textAnchor = Value;
	TextCombinedUpright = (Value) => this.Style.textCombinedUpright = Value;
	TextDecoration = (Value) => this.Style.textDecoration = Value;
	TextDecorationColor = (Value) => this.Style.textDecorationColor = Value;
	TextDecorationLine = (Value) => this.Style.textDecorationLine = Value;
	TextDecorationSkipInk = (Value) => this.Style.textDecorationSkipInk = Value;
	TextDecorationStyle = (Value) => this.Style.textDecorationStyle = Value;
	TextDecorationThickness = (Value) => this.Style.textDecorationThickness = Value;
	TextIndent = (Value) => this.Style.textIndent = Value;
	TextOrientation = (Value) => this.Style.textOrientation = Value;
	TextOverflow = (Value) => this.Style.textOverflow = Value;
	TextRendering = (Value) => this.Style.textRendering = Value;
	TextShadow = (Value) => this.Style.textShadow = Value;
	TextSizeAdjust = (Value) => this.Style.textSizeAdjust = Value;
	TextTransform = (Value) => this.Style.textTransform = Value;
	TextUnderlineOffset = (Value) => this.Style.textUnderlineOffset = Value;
	TextUnderlinePosition = (Value) => this.Style.textUnderlinePosition = Value;
	Top = (Value) => this.Style.top = Value;
	TouchAction = (Value) => this.Style.touchAction = Value;
	Transform = (Value) => this.Style.transform = Value;
	TransformBox = (Value) => this.Style.transformBox = Value;
	TransformOrigin = (Value) => this.Style.transformOrigin = Value;
	TransformStyle = (Value) => this.Style.trasnformStyle = Value;
	Transition = (Value) => this.Style.transition = Value;
	TransitionDelay = (Value) => this.Style.transitionDelay = Value;
	TransitionDuration = (Value) => this.Style.transitionDuration = Value;
	TransitionProperty = (Value) => this.Style.transitionProperty = Value;
	TransitionTimingFunction = (Value) => this.Style.transitionTimingFunction = Value;

	UnicodeBidi = (Value) => this.Style.unicodeBidi = Value;
	UnicodeRange = (Value) => this.Style.unicodeRange = Value;
	UserSelect = (Value) => this.Style.userSelect = Value;
	UserZoom = (Value) => this.Style.userZoom = Value;

	VectorEffect = (Value) => this.Style.vectorEffect = Value;
	VerticalAlign = (Value) => this.Style.verticalAlign = Value;
	Visibility = (Value) => this.Style.visibility = Value;

	Width = (Value) => this.Style.width = Value;
	Widows = (Value) => this.Style.widows = Value;
	WillChange = (Value) => this.Style.willChange = Value;
	WordBreak = (Value) => this.Style.wordBreak = Value;
	WordSpacing = (Value) => this.Style.wordSpacing = Value;
	WordWrap = (Value) => this.Style.wordWrap = Value;
	WritingMode = (Value) => this.Style.writingMode = Value;

	X = (Value) => this.Style.x = Value;

	Y = (Value) => this.Style.y = Value;

	Zindex = (Value) => this.Style.zIndex = Value;
	Zoom = (Value) => this.Style.zoom = Value;

	AddClass = (ClassName) => this.Node.classList.add(ClassName);
	RemoveClass = (ClassName) => this.Node.classList.remove(ClassName);
	ContainClass = (ClassName) => this.Node.classList.contains(ClassName);
	SetHTML = (HTMLCode) => this.Node.innerHTML = HTMLCode;
	AddHTML = (HTMLCode) => this.Node.innerHTML += HTMLCode;
	GetNodes = () => this.Node.childNodes;
	HasAttribute = (Attribute) => this.Node.hasAttribute(Attribute);
	SetAttribute = (Attribute, Value = '') => this.Node.setAttribute(Attribute, Value);
	GetAttribute = (Attribute) => this.Node.getAttribute(Attribute);
	HasAttributes = () => this.Node.hasAttributes();
	GetAttributes = () => this.Node.getAttributeNames();
	RemoveAttribute = (Attribute) => this.Node.removeAttribute(Attribute);
	AddElement = (Node) => this.Node.appendChild(Node);
	InsertAdjacentElement = (Option, Element) => this.Node.insertAdjacentElement(Option.toLowerCase(), Element);
	InsertAdjacentHTML = (Option, HTML) => this.Node.insertAdjacentHTML(Option.toLowerCase(), HTML);
	InsertAdjacentText = (Option, Text) => this.Node.insertAdjacentText(Option.toLowerCase(), Text);
	InsertBefore = (NewNode, Node) => this.Node.insertBefore(Node, NewNode);
	RemoveChild = (Node) => this.Node.removeChild(Node);
	ReplaceChild = (NewNode, OldNode) => this.Node.replaceChild(NewNode, OldNode);
	CloneElement = (CloneChildrens = true) => this.Node.cloneNode(CloneChildrens);
	GetID = () => this.Node.id;
	AddClassList = (ClassList) => this.Node.className = ClassList;
	RemoveAllClass = () => this.Node.className = '';
	GetClasses = () => this.Node.className.split(' ');
	GetInlineStyles = () => this.Style;
	AddClassToggle = (ClassName) => this.Node.classList.toggle(ClassName);
	AddClassByExpresion = (ClassName, Expresion) => this.Node.classList.toggle(ClassName, Expresion);
	ReplaceClass = (OldClass, NewClass) => this.Node.classList.replace(OldClass, NewClass);
	GetInstance = () => this.Node;
	AddText = (Text) => this.Node.textContent = Text;
	AddEventListener = (Listen, Action) => this.Node.addEventListener(Listen, Action);
	GetText = () => this.Node.textContent;
	GetContent = () => this.Node.innerHTML;
	OuterHTML = () => this.Node.outerHTML;
	GetChildren = () => this.Node.children;
	GetParent = () => this.Node.parentElement;
	FirstChildren = () => this.Node.firstElementChild;
	LastChildren = () => this.Node.lastElementChild;
	PreviousNode = () => this.Node.previousSibling();
	NextNode = () => this.Node.nextSibling;
	Remove = () => this.Node.remove();
	GetStyles = (StyleProperty = false) => (StyleProperty) ? getComputedStyle(this.Node)[StyleProperty] : getComputedStyle(this.Node);
	GetStyleInstance = () => this.Style;
	NodeName = () => this.Node.nodeName;
	GetType = () => this.Node.type;
	SetTimeout = (Action, Time = 1000) => setTimeout(Action(), Time);
	SetInterval = (Action, Time = 1000) => setInterval(Action(), Time);
	IsDraggable = () => this.Node.draggable;
	IsEditable = () => this.Node.isContentEditable;

    Enable = () => this.Node.disabled = true;
    Disable = () => this.Node.disabled = false;

	ClearContent = () => this.Node.innerHTML = ''

    HideInput = () => this.Node.setAttribute('hidden', '');

    UnHideInput = () => {
        if(this.Node.hasAttribute('hidden'))
            this.Node.removeAttribute('hidden');
    }

    Reset = () => this.Node.value = '';
    CheckCheckbox = () => this.Node.setAttribute('checked', '');

    UnCheckCheckbox = () => {
        if(this.Node.hasAttribute('checked'))
            this.Node.removeAttribute('checked');
    }
    
    SetValue = (Value) => this.Node.Value = Value;

    SetRequired = () => {
        if(!this.Node.hasAttribute('required'))
            this.Node.setAttribute('required', '');
    }

    Submit = () => this.Node.submit();
    GetAction = () => this.Node.action;
    GetEncType = () => this.Node.enctype;
    GetMethod = () => this.Node.method;
    GetTarget = () => this.Node.target;
    GetName = () => this.Node.name;
    SetType = (Type) => this.Node.setAttribute('type', Type);
    SetMaximumLength = (MaximumLength) => this.Node.setAttribute('maxlength', MaximumLength);
    SetMinimumLength = (MinimumLength) => this.Node.setAttribute('minlength', MinimumLength);
    SetMaximumRange = (MaximumRange) => this.Node.setAttribute('max', MaximumRange);
    SetMinimumRange = (MinimumRange) => this.Node.setAttribute('min', MinimumRange);
    SetPlaceholder = (Placeholder) => this.Node.setAttribute('placeholder', Placeholder);
    GetType = () => this.Node.getAttribute('type');
    GetPlaceholder = () => this.Node.getAttribute('placeholder');
    GetMaximumRange = () => this.Node.getAttribute('max');
    GetMinimumRange = () => this.Node.getAttribute('min');
    MultipleSelect = () => this.Node.multiple = true;
    UniqueSelect = () => this.Node.multiple = false;
    RemoveSelectedElement = () => this.Node.remove(this.Node.selectedIndex);
    GetMaximumLength = () => this.Node.getAttribute('maxlength');
    GetMinimumLength = () => this.Node.getAttribute('minlength');
    IsRequired = () => this.Node.hasAttribute('required');

	/*
		? The following method definition is 
		? the one that makes it possible to declare 
		? methods using objects for a specific node, the 
		? cool thing about this is that the name of the style 
		? can be written as you please, for example if you 
		? want to assign it to a node a background color and color

		Node.Styles({
			BackgroundColor: '#FF0000',
			Color: '#000000'
		});

		* Or

		Node.Styles({
			backgroundColor: '#FF0000',
			color: '#000000'
		});

		* Or

		Node.Styles({
			bACKgrounDcoLoR: '#FF0000',
			cOlOR: '#000000'
		});

		* You can write the name of the key 
		* as it appears, since this will be parsed, the 
		* key will be taken and it will be transformed 
		* to lowercase, in the end it will not matter 
		* how you write it, by the way you can declare 
		* the styles that you want, here just declare 
		* two for example.
	*/
	Styles = (Properties) => {
		let Keys = Object.keys(Properties);
		for (let Iterator = 0; Iterator < Keys.length; Iterator++) {
			let Value = Properties[Keys[Iterator]];
			switch (Keys[Iterator].toLowerCase()){
				case 'aligncontent':
					this.AlignContent(Value);
					break;
				case 'alignitems':
					this.AlignItems(Value);
					break;
				case 'alignmentbaseline':
					this.AlignmentBaseLine(Value);
					break;
				case 'all':
					this.All(Value);
					break;
				case 'animation':
					this.Animation(Value);
					break;
				case 'animationdelay':
					this.AnimationDelay(Value);
					break;
				case 'animationdirection':
					this.AnimationDirection(Value);
					break;
				case 'animationfillmode':
					this.AnimationFillMode(Value);
					break;
				case 'animationiterationcount':
					this.AnimationIterationCount(Value);
					break;
				case 'animationame':
					this.AnimationName(Value);
					break;
				case 'animationplaystate':
					this.AnimationPlayState(Value);
					break;
				case 'animationtimingfunction':
					this.AnimationTimingFunction(Value);
					break;
				case 'appearance':
					this.Appearance(Value);
					break;
				case 'ascentoverride':
					this.AscentOverride(Value);
					break;
				case 'aspectratio':
					this.AspectRatio(Value);
					break;

				case 'backdropfilter':
					this.BackdropFilter(Value);
					break;
				case 'backfacevisibility':
					this.BackfaceVisibility(Value);
					break;
				case 'background':
					this.Background(Value);
					break;
				case 'backgroundattachment':
					this.BackgroundAttachment(Value);
					break;
				case 'backgroundblendmode':
					this.BackgroundBlendMode(Value);
					break;
				case 'backgroundclip':
					this.BackgroundClip(Value);
					break;
				case 'backgroundcolor':
					this.BackgroundColor(Value);
					break;
				case 'backgroundimage':
					this.BackgroundImage(Value);
					break;
				case 'backgroundorigin':
					this.BackgroundOrigin(Value);
					break;
				case 'backgroundposition':
					this.BackgroundPosition(Value);
					break;
				case 'backgroundpositiony':
					this.BackgroundPositionX(Value);
					break;
				case 'backgroundpositiony':
					this.BackgroundPositionY(Value);
					break;
				case 'backgroundrepeat':
					this.BackgroundRepeat(Value);
					break;
				case 'backgroundrepeatx':
					this.BackgroundRepeatX(Value);
					break;
				case 'backgroundrepeaty':
					this.BackgroundRepeatY(Value);
					break;
				case 'backgroundsize':
					this.BackgroundSize(Value);
					break;
				case 'baselineshift':
					this.BaselineShift(Value);
					break;
				case 'blocksize':
					this.BlockSize(Value);
					break;
				case 'border':
					this.Border(Value);
					break;
				case 'borderblock':
					this.BorderBlock(Value);
					break;
				case 'borderblockcolor':
					this.BorderBlockColor(Value);
					break;
				case 'borderblockend':
					this.BorderBlockEnd(Value);
					break;
				case 'borderblockendcolor':
					this.BorderBlockEndColor(Value);
					break;
				case 'borderblockendwidth':
					this.BorderBlockEndWidth(Value);
					break;
				case 'borderblockstart':
					this.BorderBlockStart(Value);
					break;
				case 'borderblockstartcolor':
					this.BorderBlockStartColor(Value);
					break;
				case 'borderblockstartstyle':
					this.BorderBlockStartStyle(Value);
					break;
				case 'bottom':
					this.Bottom(Value);
					break;
				case 'borderblockstartwidth':
					this.BorderBlockStartWidth(Value);
					break;
				case 'borderblockstyle':
					this.BorderBlockStyle(Value);
					break;
				case 'borderblockwidth':
					this.BorderBlockWidth(Value);
					break;
				case 'borderbottom':
					this.BorderBottom(Value);
					break;
				case 'borderbottomcolor':
					this.BorderBottomColor(Value);
					break;
				case 'borderbottomleftradius':
					this.BorderBottomLeftRadius(Value);
					break;
				case 'borderbottomrightradius':
					this.BorderBottomRightRadius(Value);
					break;
				case 'borderbottomstyle':
					this.BorderBottomStyle(Value);
					break;
				case 'borderbottomwidth':
					this.BorderBottomWidth(Value);
					break;
				case 'bordercollapse':
					this.BorderCollapse(Value);
					break;
				case 'bordercolor':
					this.BorderColor(Value);
					break;
				case 'borderendendradius':
					this.BorderEndEndRadius(Value);
					break;
				case 'borderendstartradius':
					this.BorderEndStartRadius(Value);
					break;
				case 'borderimage':
					this.BorderImage(Value);
					break;
				case 'borderimageoutset':
					this.BorderImageOutset(Value);
					break;
				case 'borderimagerepeat':
					this.BorderImageRepeat(Value);
					break;
				case 'borderimagesource':
					this.BorderImageSource(Value);
					break;
				case 'borderimagewidth':
					this.BorderImageWidth(Value);
					break;
				case 'borderinline':
					this.BorderInline(Value);
					break;
				case 'borderinlinecolor':
					this.BorderInlineColor(Value);
					break;
				case 'borderinlineend':
					this.BorderInlineEnd(Value);
					break;
				case 'borderinlineendcolor':
					this.BorderInlineEndColor(Value);
					break;
				case 'borderinlineendstyle':
					this.BorderInlineEndStyle(Value);
					break;
				case 'borderinlinewidth':
					this.BorderInlineWidth(Value);
					break;
				case 'borderinlinestart':
					this.BorderInlineStart(Value);
					break;
				case 'borderinlinestartcolor':
					this.BorderInlineStartColor(Value);
					break;
				case 'borderinlinestartstyle':
					this.BorderInlineStartStyle(Value);
					break;
				case 'borderinlinestartwidth':
					this.BorderInlineStartWidth(Value);
					break;
				case 'borderinlinestyle':
					this.BorderInline(Value);
					break;
				case 'borderinlinewidth':
					this.BorderInlineWidth(Value);
					break;
				case 'borderleft':
					this.BorderLeft(Value);
					break;
				case 'borderleftcolor':
					this.BorderLeftColor(Value);
					break;
				case 'borderleftstyle':
					this.BorderLeftStyle(Value);
					break;
				case 'borderleftwidth':
					this.BorderLeftWidth(Value);
					break;
				case 'borderradius':
					this.BorderRadius(Value);
					break;
				case 'borderright':
					this.BorderRight(Value);
					break;
				case 'borderrightcolor':
					this.BorderRightColor(Value);
					break;
				case 'borderrightstyle':
					this.BorderRightStyle(Value);
					break;
				case 'borderrightwidth':
					this.BorderRightWidth(Value);
					break;
				case 'borderspacing':
					this.BorderSpacing(Value);
					break;
				case 'borderstartendradius':
					this.BorderStartEndRadius(Value);
					break;
				case 'borderstartstartradius':
					this.BorderStartStartRadius(Value);
					break;
				case 'borderstyle':
					this.BorderStyle(Value);
					break;
				case 'bordertop':
					this.BorderTop(Value);
					break;
				case 'bordertopcolor':
					this.BorderTopColor(Value);
					break;
				case 'bordertopleftradius':
					this.BorderTopLeftRadius(Value);
					break;
				case 'bordertoprightradius':
					this.BorderTopRightRadius(Value);
					break;
				case 'bordertopstyle':
					this.BorderTopStyle(Value);
					break;
				case 'bordertopwidth':
					this.BorderTopWidth(Value);
					break;
				case 'borderwidth':
					this.BorderWidth(Value);
					break;
				case 'borderbottom':
					this.BorderBottom(Value);
					break;
				case 'boxshadow':
					this.BoxShadow(Value);
					break;
				case 'boxsizing':
					this.BoxSizing(Value);
					break;
				case 'breakafter':
					this.BreakAfter(Value);
					break;
				case 'breakbefore':
					this.BreakBefore(Value);
					break;
				case 'breakinside':
					this.BreakInside(Value);
					break;
				case 'bufferedrendering':
					this.BufferedRendering(Value);
					break;

				case 'captionside':
					this.CaptionSide(Value);
					break;
				case 'caretcolor':
					this.CaretColor(Value);
					break;
				case 'clear':
					this.Clear(Value);
					break;
				case 'clip':
					this.Clip(Value);
					break;
				case 'clippath':
					this.ClipPath(Value);
					break;
				case 'cliprule':
					this.ClipRule(Value);
					break;
				case 'color':
					this.Color(Value);
					break;
				case 'colorinterpolation':
					this.ColorInterpolation(Value);
					break;
				case 'colorinterpolationfilters':
					this.ColorInterpolationFilters(Value);
					break;
				case 'colorrendering':
					this.ColorRendering(Value);
					break;
				case 'colorscheme':
					this.ColorScheme(Value);
					break;
				case 'columncount':
					this.ColumnCount(Value);
					break;
				case 'columnfill':
					this.ColumnFill(Value);
					break;
				case 'columngap':
					this.ColumnGap(Value);
					break;
				case 'columnrule':
					this.ColumnRule(Value);
					break;
				case 'columnrulecolor':
					this.ColumnRuleColor(Value);
					break;
				case 'columnrulestyle':
					this.ColumnRuleStyle(Value);
					break;
				case 'columnRuleWidth':
					this.ColumnRuleWidth(Value);
					break;
				case 'columnspan':
					this.ColumnSpan(Value);
					break;
				case 'columnwidth':
					this.ColumnWidth(Value);
					break;
				case 'columns':
					this.Columns(Value);
					break;
				case 'contain':
					this.Contain(Value);
					break;
				case 'containintrinsicsize':
					this.ContainIntrinsicSize(Value);
					break;
				case 'content':
					this.Content(Value);
					break;
				case 'contentvisibility':
					this.ContentVisibility(Value);
					break;
				case 'counterincrement':
					this.CounterIncrement(Value);
					break;
				case 'counterreset':
					this.CounterReset(Value);
					break;
				case 'counterset':
					this.CounterSet(Value);
					break;
				case 'cursor':
					this.Cursor(Value);
					break;
				case 'cx':
					this.Cx(Value);
					break;
				case 'cy':
					this.Cy(Value);
					break;
				case 'd':
					this.D(Value);
					break;

				case 'descentoverride':
					this.DescentOverride(Value);
					break;
				case 'direction':
					this.Direction(Value);
					break;
				case 'display':
					this.Display(Value);
					break;
				case 'dominanbaseline':
					this.DominantBaseline(Value);
					break;
				case 'emptycells':
					this.EmptyCells(Value);
					break;

				case 'epubcaptionside':
					this.EpubCaptionSide(Value);
					break;
				case 'epubtextcombine':
					this.EpubTextCombine(Value);
					break;
				case 'epubtextemphasis':
					this.EpubTextEmphasis(Value);
					break;
				case 'epubtextemphasiscolor':
					this.EpubTextEmphasisColor(Value);
					break;
				case 'epubtextorientation':
					this.EpubTextOrientation(Value);
					break;
				case 'epubtexttransform':
					this.EpubTextTransform(Value);
					break;
				case 'epubwordbreak':
					this.EpubWordBreak(Value);
					break;
				case 'epubwritingmode':
					this.EpubWritingMode(Value);
					break;

				case 'fill':
					this.Fill(Value);
					break;
				case 'fillopacity':
					this.FillOpacity(Value);
					break;
				case 'fillrule':
					this.FillRule(Value);
					break;
				case 'filter':
					this.Filter(Value);
					break;
				case 'flex':
					this.Flex(Value);
					break;
				case 'flexbasis':
					this.FlexBasis(Value);
					break;
				case 'flexdirection':
					this.FlexDirection(Value);
					break;
				case 'flexflow':
					this.FlexFlow(Value);
					break;
				case 'flexgrow':
					this.FlexGrow(Value);
					break;
				case 'flexwrap':
					this.FlexWrap(Value);
					break;
				case 'float':
					this.Float(Value);
					break;
				case 'floodcolor':
					this.FloodColor(Value);
					break;
				case 'floodopacity':
					this.FloodOpacity(Value);
					break;
				case 'font':
					this.Font(Value);
					break;
				case 'fontdisplay':
					this.FontDisplay(Value);
					break;
				case 'fontfamily':
					this.FontFamily(Value);
					break;
				case 'fontfeaturesettings':
					this.FontFeatureSettings(Value);
					break;
				case 'fontkerning':
					this.FontKerning(Value);
					break;
				case 'fontopticalsizing':
					this.FontOpticalSizing(Value);
					break;
				case 'fontsize':
					this.FontSize(Value);
					break;
				case 'fontstretch':
					this.FontStretch(Value);
					break;
				case 'fontstyle':
					this.FontStyle(Value);
					break;
				case 'fontvariant':
					this.FontVariant(Value);
					break;
				case 'fontvariantcaps':
					this.FontVariantCaps(Value);
					break;
				case 'fontvarianteastasian':
					this.FontVariantEastAsian(Value);
					break;
				case 'fontvariantligatures':
					this.FontVariantLigatures(Value);
					break;
				case 'fontvariantnumeric':
					this.FontVariantNumeric(Value);
					break;
				case 'fontvariationsetting':
					this.FontVariationSetting(Value);
					break;
				case 'fontweight':
					this.FontWeight(Value);
					break;
				case 'forcedcoloradjust':
					this.ForcedColorAdjust(Value);
					break;

				case 'gap':
					this.Gap(Value);
					break;
				case 'grid':
					this.Grid(Value);
					break;
				case 'gridarea':
					this.GridArea(Value);
					break;
				case 'gridautocolumns':
					this.GridAutoColumns(Value);
					break;
				case 'gridautoflow':
					this.GridAutoFlow(Value);
					break;
				case 'gridautorows':
					this.GridAutoRows(Value);
					break;
				case 'gridcolumn':
					this.GridColumn(Value);
					break;
				case 'gridcolumnend':
					this.GridColumnEnd(Value);
					break;
				case 'gridcolumngap':
					this.GridColumnGap(Value);
					break;
				case 'gridcolumnstart':
					this.GridColumnStart(Value);
					break;
				case 'gridgap':
					this.GridGap(Value);
					break;
				case 'gridrow':
					this.GridRow(Value);
					break;
				case 'gridrowend':
					this.GridRowEnd(Value);
					break;
				case 'gridrowgap':
					this.GridRowGap(Value);
					break;
				case 'gridrowstart':
					this.GridRowStart(Value);
					break;
				case 'gridtemplate':
					this.GridTemplate(Value);
					break;
				case 'gridtemplateareas':
					this.GridTemplateAreas(Value);
					break;
				case 'gridtemplatecolumns':
					this.GridTemplateColumns(Value);
					break;
				case 'gridtemplaterows':
					this.GridTemplateRows(Value);
					break;

				case 'height':
					this.Height(Value);
					break;
				case 'hyphens':
					this.Hyphens(Value);
					break;

				case 'imageorientation':
					this.ImageOrientation(Value);
					break;
				case 'imagerendering':
					this.ImageRendering(Value);
					break;
				case 'inherits':
					this.Inherits(Value);
					break;
				case 'initialvalue':
					this.InitialValue(Value);
					break;
				case 'inlinesize':
					this.InlineSize(Value);
					break;
				case 'inset':
					this.Inset(Value);
					break;
				case 'insetblock':
					this.InsetBlock(Value);
					break;
				case 'insetblockend':
					this.InsetBlockEnd(Value);
					break;
				case 'insetblockstart':
					this.InsetBlockStart(Value);
					break;
				case 'insetinline':
					this.InsetInline(Value);
					break;
				case 'insetinlineend':
					this.InsetInlineEnd(Value);
					break;
				case 'insetinlinestart':
					this.InsetInlineStart(Value);
					break;
				case 'isolation':
					this.Isolation(Value);
					break;
				case 'justifycontent':
					this.JustifyContent(Value);
					break;
				case 'justifyitems':
					this.JustifyItems(Value);
					break;
				case 'justifyself':
					this.JustifySelf(Value);
					break;
				case 'left':
					this.Left(Value);
					break;
				case 'letterspacing':
					this.LetterSpacing(Value);
					break;
				case 'lightingcolor':
					this.LightingColor(Value);
					break;
				case 'linebreak':
					this.LineBreak(Value);
					break;
				case 'linegapoverride':
					this.LineGapOverride(Value);
					break;
				case 'lineheight':
					this.LineHeight(Value);
					break;
				case 'liststyle':
					this.ListStyle(Value);
					break;
				case 'liststyleimage':
					this.ListStyleImage(Value);
					break;
				case 'liststyleposition':
					this.ListStylePosition(Value);
					break;
				case 'liststyletype':
					this.ListStyleTYpe(Value);
					break;

				case 'margin':
					this.Margin(Value);
					break;
				case 'marginblock':
					this.MarginBlock(Value);
					break;
				case 'marginblockend':
					this.MarginBlockEnd(Value);
					break;
				case 'marginblockstart':
					this.MarginBlockStart(Value);
					break;
				case 'marginbottom':
					this.MarginBottom(Value);
					break;
				case 'margininline':
					this.MarginInline(Value);
					break;
				case 'margininlinestart':
					this.MarginInlineStart(Value);
					break;
				case 'margininlineend':
					this.MarginInlineEnd(Value);
					break;
				case 'marginright':
					this.MarginRight(Value);
					break;
				case 'margintop':
					this.MarginTop(Value);
					break;
				case 'marker':
					this.Marker(Value);
					break;
				case 'markerend':
					this.MarkerEnd(Value);
					break;
				case 'markermid':
					this.MarkerMid(Value);
					break;
				case 'markerstart':
					this.MarkerStart(Value);
					break;
				case 'mask':
					this.Mask(Value);
					break;
				case 'masktype':
					this.MaskType(Value);
					break;
				case 'maxblocksize':
					this.MaxBlockSize(Value);
					break;
				case 'maxheight':
					this.MaxHeight(Value);
					break;
				case 'maxinlinesize':
					this.MaxInlineSize(Value);
					break;
				case 'maxwidth':
					this.MaxWidth(Value);
					break;
				case 'maxzoom':
					this.MaxZoom(Value);
					break;
				case 'minblocksize':
					this.MinBlockSize(Value);
					break;
				case 'minheight':
					this.MinHeight(Value);
					break;
				case 'mininlinesize':
					this.MinInlineSize(Value);
					break;
				case 'minwidth':
					this.MinWidth(Value);
					break;
				case 'minzoom':
					this.MinZoom(Value);
					break;
				case 'minblocksize':
					this.MinBlockSize(Value);
					break;
				case 'minheight':
					this.MinHeight(Value);
					break;
				case 'mixblendmode':
					this.MixBlendMode(Value);
					break;

				case 'objectfit':
					this.ObjectFit(Value);
					break;
				case 'objectposition':
					this.ObjectPosition(Value);
					break;
				case 'offset':
					this.Offset(Value);
					break;
				case 'offsetdistance':
					this.OffsetDistance(Value);
					break;
				case 'offsetpath':
					this.OffsetPath(Value);
					break;
				case 'offsetrotate':
					this.OffsetRotate(Value);
					break;
				case 'opacity':
					this.Opacity(Value);
					break;
				case 'order':
					this.Order(Value);
					break;
				case 'orientation':
					this.Orientation(Value);
					break;
				case 'orphans':
					this.Orphans(Value);
					break;
				case 'outline':
					this.Outline(Value);
					break;
				case 'outlinecolor':
					this.OutlineColor(Value);
					break;
				case 'outlineoffset':
					this.OutlineOffset(Value);
					break;
				case 'outlinestyle':
					this.OutlineStyle(Value);
					break;
				case 'outlinewidth':
					this.OutlineWidth(Value);
					break;
				case 'overflow':
					this.Overflow(Value);
					break;
				case 'overflowanchor':
					this.OverflowAnchor(Value);
					break;
				case 'overflowclipmargin':
					this.OverflowClipMargin(Value);
					break;
				case 'overflowwrap':
					this.OverflowWrap(Value);
					break;
				case 'overflowx':
					this.OverflowX(Value);
					break;
				case 'overflowy':
					this.OverflowY(Value);
					break;
				case 'overscrollbehavior':
					this.OverscrollBehavior(Value);
					break;
				case 'overscrollbehaviorblock':
					this.OverscrollBehaviorBlock(Value);
					break;
				case 'overscrollbehaviorinline':
					this.OverscrollBehaviorInline(Value);
					break;
				case 'overscrollbehaviorx':
					this.OverscrollBehaviorX(Value);
					break;
				case 'overscrollbehaviory':
					this.OverscrollBehaviorY(Value);
					break;

				case 'padding':
					this.Padding(Value);
					break;
				case 'paddingblock':
					this.PaddingBlock(Value);
					break;
				case 'paddingblockend':
					this.PaddingBlockEnd(Value);
					break;
				case 'paddingblockstart':
					this.PaddingBlockStart(Value);
					break;
				case 'paddingbottom':
					this.PaddingBottom(Value);
					break;
				case 'paddinginline':
					this.PaddingInline(Value);
					break;
				case 'paddinginlineend':
					this.PaddingInlineEnd(Value);
					break;
				case 'paddinginlinestart':
					this.PaddingInlineStart(Value);
					break;
				case 'paddingleft':
					this.PaddingLeft(Value);
					break;
				case 'paddingright':
					this.PaddingRight(Value);
					break;
				case 'paddingtop':
					this.PaddingTop(Value);
					break;
				case 'page':
					this.Page(Value);
					break;
				case 'pagebreakafter':
					this.PageBreakAfter(Value);
					break;
				case 'pagebreakbefore':
					this.PageBreakBefore(Value);
					break;
				case 'pagebreakinside':
					this.PageBreakInside(Value);
					break;
				case 'pageorientation':
					this.PageOrientation(Value);
					break;
				case 'paintorder':
					this.PaintOrder(Value);
					break;
				case 'perspective':
					this.Perspective(Value);
					break;
				case 'perspectiveorigin':
					this.PerspectiveOrigin(Value);
					break;
				case 'placecontent':
					this.PlaceContent(Value);
					break;
				case 'placeitems':
					this.PlaceItems(Value);
					break;
				case 'placeself':
					this.PlaceSelf(Value);
					break;
				case 'pointerevents':
					this.PointerEvents(Value);
					break;
				case 'position':
					this.Position(Value);
					break;

				case 'quotes':
					this.Quotes(Value);
					break;

				case 'r':
					this.R(Value);
					break;
				case 'resize':
					this.Resize(Value);
					break;
				case 'right':
					this.Right(Value);
					break;
				case 'rowgap':
					this.RowGap(Value);
					break;
				case 'rubyposition':
					this.RubyPosition(Value);
					break;
				case 'rx':
					this.Rx(Value);
					break;
				case 'ry':
					this.Ry(Value);
					break;

				case 'scrollbehavior':
					this.ScrollBehavior(Value);
					break;
				case 'scrollmargin':
					this.ScrollMargin(Value);
					break;
				case 'scrollmarginblock':
					this.ScrollMarginBlock(Value);
					break;
				case 'scrollmarginblockend':
					this.ScrollMarginBlockEnd(Value);
					break;
				case 'scrollmarginblockstart':
					this.ScrollMarginBlockStart(Value);
					break;
				case 'scrollmarginbottom':
					this.ScrollMarginBottom(Value);
					break;
				case 'scrollmargininline':
					this.ScrollMarginInline(Value);
					break;
				case 'scrollmargininlineend':
					this.ScrollMarginInlineEnd(Value);
					break;
				case 'scrollmargininlinestart':
					this.ScrollMarginInlineStart(Value);
					break;
				case 'scrollmarginleft':
					this.ScrollMarginLeft(Value);
					break;
				case 'scrollmarginright':
					this.ScrollMarginRight(Value);
					break;
				case 'scrollmargintop':
					this.ScrollMarginTop(Value);
					break;
				case 'scrollpadding':
					this.ScrollPadding(Value);
					break;
				case 'scrollpaddingblock':
					this.ScrollPaddingBlock(Value);
					break;
				case 'scrollpaddingblockend':
					this.ScrollPaddingBlockEnd(Value);
					break;
				case 'scrollpaddingblockstart':
					this.ScrollPaddingBlockStart(Value);
					break;
				case 'scrollpaddingbottom':
					this.ScrollPaddingBottom(Value);
					break;
				case 'scrollpaddinginline':
					this.ScrollPaddingInline(Value);
					break;
				case 'scrollpaddinginlineend':
					this.ScrollPaddingInlineEnd(Value);
					break;
				case 'scrollpaddinginlinestart':
					this.ScrollPaddingInlineStart(Value);
					break;
				case 'scrollpaddingleft':
					this.ScrollPaddingLeft(Value);
					break;
				case 'scrollpaddingright':
					this.ScrollPaddingRight(Value);
					break;
				case 'scrollpaddingtop':
					this.ScrollPaddingTop(Value);
					break;
				case 'scrollsnapalign':
					this.ScrollSnapAlign(Value);
					break;
				case 'scrollsnapstop':
					this.ScrollSnapStop(Value);
					break;
				case 'scrollsnaptype':
					this.ScrollSnapType(Value);
					break;
				case 'shapeimagethreshold':
					this.ShapeImageThreshold(Value);
					break;
				case 'shapemargin':
					this.ShapeMargin(Value);
					break;
				case 'shapeoutside':
					this.ShapeOutside(Value);
					break;
				case 'shaperendering':
					this.ShapeRendering(Value);
					break;
				case 'size':
					this.Size(Value);
					break;
				case 'speak':
					this.Speak(Value);
					break;
				case 'src':
					this.Src(Value);
					break;
				case 'stopcolor':
					this.StopColor(Value);
					break;
				case 'stopopacity':
					this.StopOpacity(Value);
					break;
				case 'stroke':
					this.Stroke(Value);
					break;
				case 'strokedasharray':
					this.StrokeDasharray(Value);
					break;
				case 'strokedashoffset':
					this.StrokeDashoffset(Value);
					break;
				case 'strokelinecap':
					this.StrokeLinecap(Value);
					break;
				case 'strokelinejoin':
					this.StrokeLinejoin(Value);
					break;
				case 'strokemiterlimit':
					this.StrokeMiterlimit(Value);
					break;
				case 'strokeopacity':
					this.StrokeOpacity(Value);
					break;
				case 'strokewidth':
					this.StrokeWidth(Value);
					break;
				case 'syntax':
					this.Syntax(Value);
					break;

				case 'tabsize':
					this.TabSize(Value);
					break;
				case 'tablelayout':
					this.TableLayout(Value);
					break;
				case 'textalign':
					this.TextAlign(Value);
					break;
				case 'textalignlast':
					this.TextAlignLast(Value);
					break;
				case 'textanchor':
					this.TextAnchor(Value);
					break;
				case 'textcombinedupright':
					this.TextCombinedUpright(Value);
					break;
				case 'textdecoration':
					this.TextDecoration(Value);
					break;
				case 'textdecorationcolor':
					this.TextDecorationColor(Value);
					break;
				case 'textdecorationline':
					this.TextDecorationLine(Value);
					break;
				case 'textdecorationskipink':
					this.TextDecorationSkipInk(Value);
					break;
				case 'textdecorationstyle':
					this.TextDecorationStyle(Value);
					break;
				case 'textdecorationthickness':
					this.TextDecorationThickness(Value);
					break;
				case 'textindent':
					this.TextIndent(Value);
					break;
				case 'textorientation':
					this.TextOrientation(Value);
					break;
				case 'textoverflow':
					this.TextOverflow(Value);
					break;
				case 'textrendering':
					this.TextRendering(Value);
					break;
				case 'textshadow':
					this.TextShadow(Value);
					break;
				case 'textsizeadjust':
					this.TextSizeAdjust(Value);
					break;
				case 'texttransform':
					this.TextTransform(Value);
					break;
				case 'textunderlineoffset':
					this.TextUnderlineOffset(Value);
					break;
				case 'textunderlineposition':
					this.TextUnderlinePosition(Value);
					break;
				case 'top':
					this.Top(Value);
					break;
				case 'touchaction':
					this.TouchAction(Value);
					break;
				case 'transform':
					this.Transform(Value);
					break;
				case 'transformbox':
					this.TransformBox(Value);
					break;
				case 'transformorigin':
					this.TransformOrigin(Value);
					break;
				case 'transformstyle':
					this.TransformStyle(Value);
					break;
				case 'transition':
					this.Transition(Value);
					break;
				case 'transitiondelay':
					this.TransitionDelay(Value);
					break;
				case 'transitionduration':
					this.TransitionDuration(Value);
					break;
				case 'transitionproperty':
					this.TransitionProperty(Value);
					break;
				case 'transitiontimingfunction':
					this.TransitionTimingFunction(Value);
					break;

				case 'unicodebidi':
					this.UnicodeBidi(Value);
					break;
				case 'unicoderange':
					this.UnicodeRange(Value);
					break;
				case 'userselect':
					this.UserSelect(Value);
					break;
				case 'userzoom':
					this.UserZoom(Value);
					break;

				case 'vectoreffect':
					this.VectorEffect(Value);
					break;
				case 'verticalalign':
					this.VerticalAlign(Value);
					break;
				case 'visibility':
					this.Visibility(Value);
					break;

				case 'width':
					this.Width(Value);
					break;
				case 'widows':
					this.Widows(Value);
					break;
				case 'willchange':
					this.WillChange(Value);
					break;
				case 'wordbreak':
					this.WordBreak(Value);
					break;
				case 'wordspacing':
					this.WordSpacing(Value);
					break;
				case 'wordwrap':
					this.WordWrap(Value);
					break;
				case 'writingmode':
					this.WritingMode(Value);
					break;

				case 'x':
					this.X(Value);
					break;
				case 'y':
					this.Y(Value);
					break;

				case 'zoom':
					this.Zoom(Value);
					break;
				default:
					this.Zindex(Value);
			}
		}
	};

    GetElement = (Element, Method) => {
		switch (Method.toLowerCase()) {
			case 'class':
				return document.getElementsByClassName(Element).valueOf()[0];
			case 'name':
				return document.getElementsByName(Element)[0];
			case 'tag':
				return document.getElementsByTagName(Element)[0];
			default:
				return document.getElementById(Element);
		}
	};

    CreateNode = (Tag, Content, Attributes = []) => {
        const Node = document.createElement(Tag);
        Node.innerHTML = Content;
        for(let Iterator = 0; Iterator < Attributes.length; Iterator++)
            // Attributes = [ ['MyAttribute', 'MyValue'] ]
            Node.setAttribute(Attributes[Iterator][0], Attributes[Iterator][1]);
        this.Node.appendChild(Node);
        return Node;
    };

	InsertATag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('a', Content, Attributes)));
	InsertAbbrTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('abbr', Content, Attributes)));
	InsertAcronymTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('acronym', Content, Attributes)));
	InsertAddressTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('address', Content, Attributes)));
	InsertAppletTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('applet', Content, Attributes)));
	InsertAreaTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('area', Content, Attributes)));
	InsertArticleTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('article', Content, Attributes)));
	InsertAsideTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('aside', Content, Attributes)));
	InsertAudioTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('audio', Content, Attributes)));

	InsertBTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('b', Content, Attributes)));
	InsertBaseTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('base', Content, Attributes)));
	InsertBaseFontTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('basefont', Content, Attributes)));
	InsertBbTag = (a, attribbutes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('bb', Content, Attributes)));
	InsertBdoTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('bdo', Content, Attributes)));
	InsertBigTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('big', Content, Attributes)));
	InsertBlockQuoteTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('blockquote', Content, Attributes)));
	InsertBodyTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('body', Content, Attributes)));
	InsertBrTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('br', Content, Attributes)));
	InsertButtonTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('button', Content, Attributes)));

	InsertCanvasTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('canvas', Content, Attributes)));
	InsertCaptionTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('caption', Content, Attributes)));
	InsertCenterTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('center', Content, Attributes)));
	InsertCiteTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('cite', Content, Attributes)));
	InsertCodeTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('code', Content, Attributes)));
	InsertColTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('col', Content, Attributes)));
	InsertColGroupTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('colgroup', Content, Attributes)));
	InsertCommandTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('command', Content, Attributes)));

	InsertDataGridTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('datagrid', Content, Attributes)));
	InsertDataListTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('datalist', Content, Attributes)));
	InsertDdTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('dd', Content, Attributes)));
	InsertDelTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('del', Content, Attributes)));
	InsertDetailsTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('details', Content, Attributes)));
	InsertDfnTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('dfn', Content, Attributes)));
	InsertDialogTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('dialog', Content, Attributes)));
	InsertDirTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('dir', Content, Attributes)));
	InsertDivTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('div', Content, Attributes)));
	InsertDlTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('dl', Content, Attributes)));
	InsertTdTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('dt', Content, Attributes)));

	InsertEmTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('em', Content, Attributes)));
	InsertEmbedTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('embed', Content, Attributes)));
	InsertEventSourceTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('eventsource', Content, Attributes)));

	InsertFieldsetTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('fieldset', Content, Attributes)));
	InsertFigcaptionTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('figcaption', Content, Attributes)));
	InsertFigureTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('figure', Content, Attributes)));
	InsertFontTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('font', Content, Attributes)));
	InsertFooterTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('footer', Content, Attributes)));
	InsertFormTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('form', Content, Attributes)));
	InsertFrameTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('frame', Content, Attributes)));
	InsertFrameSetTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('frameset', Content, Attributes)));

	InsertH1Tag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('h1', Content, Attributes)));
	InsertH2Tag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('h2', Content, Attributes)));
	InsertH3Tag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('h3', Content, Attributes)));
	InsertH4Tag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('h4', Content, Attributes)));
	InsertH5Tag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('h5', Content, Attributes)));
	InsertH6Tag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('h6', Content, Attributes)));
	InsertHeadTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('head', Content, Attributes)));
	InsertHeaderTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('header', Content, Attributes)));
	InsertHgroupTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('hgroup', Content, Attributes)));
	InsertHrTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('hr', Content, Attributes)));
	InsertHtmlTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('html', Content, Attributes)));

	InsertITag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('i', Content, Attributes)));
	InsertIframeTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('iframe', Content, Attributes)));
	InsertImgTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('img', Content, Attributes)));
	InsertInputTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('input', Content, Attributes)));
	InsertInsTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('ins', Content, Attributes)));
	InsertIsIndexTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('isindex', Content, Attributes)));

	InsertKbdTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('kbd', Content, Attributes)));
	InsertKeygenTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('keygen', Content, Attributes)));

	InsertLabelTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('label', Content, Attributes)));
	InsertLegendTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('legend', Content, Attributes)));
	InsertLiTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('li', Content, Attributes)));
	InsertLinkTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('link', Content, Attributes)));

	InsertMapTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('map', Content, Attributes)));
	InsertMarkTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('mark', Content, Attributes)));
	InsertMenuTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('menu', Content, Attributes)));
	InsertMetaTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('meta', Content, Attributes)));
	InsertMeterTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('meter', Content, Attributes)));

	InsertNavTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('nav', Content, Attributes)));
	InsertNoFramesTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('noframes', Content, Attributes)));
	InsertNoScriptTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('noscript', Content, Attributes)));

	InsertObjectTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('object', Content, Attributes)));
	InsertOlTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('ol', Content, Attributes)));
	InsertOptGroupTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('optgroup', Content, Attributes)));
	InsertOptionTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('option', Content, Attributes)));
	InsertOutputTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('output', Content, Attributes)));

	InsertPTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('p', Content, Attributes)));
	InsertParamTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('param', Content, Attributes)));
	InsertPreTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('pre', Content, Attributes)));
	InsertProgressTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('progress', Content, Attributes)));

	InsertQTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('q', Content, Attributes)));

	InsertRpTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('rp', Content, Attributes)));
	InsertRtTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('rt', Content, Attributes)));
	InsertRubyTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('ruby', Content, Attributes)));

	InsertSTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('s', Content, Attributes)));
	InsertSampTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('samp', Content, Attributes)));
	InsertScriptTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('script', Content, Attributes)));
	InsertSectionTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('section', Content, Attributes)));
	InsertSelectTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('select', Content, Attributes)));
	InsertSmallTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('small', Content, Attributes)));
	InsertSourceTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('source', Content, Attributes)));
	InsertSpanTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('span', Content, Attributes)));
	InsertStrikeTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('strike', Content, Attributes)));
	InsertStrongTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('strong', Content, Attributes)));
	InsertStyleTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('style', Content, Attributes)));
	InsertSubTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('sub', Content, Attributes)));
	InsertSupTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('sup', Content, Attributes)));

	InsertTableTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('table', Content, Attributes)));
	InsertTbodyTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('tbody', Content, Attributes)));
	InsertTdTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('td', Content, Attributes)));
	InsertTextAreaTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('textarea', Content, Attributes)));
	InsertTfootTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('tfoot', Content, Attributes)));
	InsertThTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('th', Content, Attributes)));
	InsertTheadTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('thead', Content, Attributes)));
	InsertTimeTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('time', Content, Attributes)));
	InsertTitleTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('title', Content, Attributes)));
	InsertTrTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('tr', Content, Attributes)));
	InsertTrackTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('track', Content, Attributes)));
	InsertTtTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('tt', Content, Attributes)));

	InsertUTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('u', Content, Attributes)));
	InsertUlTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('ul', Content, Attributes)));

	InsertVarTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('var', Content, Attributes)));
	InsertVideoTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('video', Content, Attributes)));

	InsertWbrTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('wbr', Content, Attributes)));

	InsertMainTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('main', Content, Attributes)));
	InsertMenuItemTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('menuitem', Content, Attributes)));

	InsertDataTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('data', Content, Attributes)));

	InsertRtcTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('rtc', Content, Attributes)));
	InsertSummaryTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('summary', Content, Attributes)));
	InsertTemplateTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('template', Content, Attributes)));
	InsertVideoTag = (Content, Attributes = []) => $(SnakeDOM.CheckNodeID(this.CreateNode('video', Content, Attributes)));
};

SnakeDOM.OnReadyStateChange(() => {
	Nodes = (Property) => SnakeDOM.QuerySelectorAll(`[${Property}]`);

	if(document.readyState == 'complete'){
		
		L = (Method, Attribute) => {
			Nodes(Attribute).forEach((Node) => {
				Node = $(SnakeDOM.CheckNodeID(Node));
				Node[Method](Node.GetAttribute(Attribute));
				Node.RemoveAttribute(Attribute);
			})
		};

		/* 
			? OMG Rodii what is this fucking bitch fucking shit!!

			* Relax, SnakeS allows you not only to declare styles using 
			* the SnakeNode class node instance, 
			* (Node.PropertyName(Value)) || (Node.Styles({PropertyName: Value})) 
			* but also allows you to declare styles as tag properties.

			? Example:
			* <body background-color='red' color='black' font-family='sans-serif' ...>
		*/
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
		L('Bottom', 'bottom');

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

/*
	? Shortcut to be able to instantiate 
	? nodes quickly, like TrashQuery, sorry, JQuery.
*/
$ = (Element, GetMethod = 'id') => new SnakeNode(Element, GetMethod);

/*
 * Drink water!
*/