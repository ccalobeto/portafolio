<script lang="ts">
	interface Props {
		iconFill?: string
		iconStroke?: string
	}

	let { iconFill = 'transparent', iconStroke = 'var(--yellow)' }: Props =
		$props()
</script>

<svg
	width="100%"
	height="100%"
	viewBox="0 0 512 512"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xml:space="preserve"
	style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
	><ellipse cx="256" cy="256" rx="216" ry="216" style="fill:{iconFill};" /><path
		d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,40c119.214,0 216,96.786 216,216c0,119.214 -96.786,216 -216,216c-119.214,0 -216,-96.786 -216,-216c0,-119.214 96.786,-216 216,-216Z"
		style="fill:{iconStroke};"
	/><path
		d="M233.791,300.419l51.41,-0l12.339,-197.417l-76.088,-0l12.339,197.417Zm26.322,109.402c21.798,-0 39.895,-17.686 39.895,-39.484c-0,-21.387 -18.097,-39.072 -39.895,-39.072c-22.21,0 -40.306,17.685 -40.306,39.072c-0,21.798 18.096,39.484 40.306,39.484Z"
		style="fill:{iconStroke};fill-rule:nonzero;"
	/></svg
>
