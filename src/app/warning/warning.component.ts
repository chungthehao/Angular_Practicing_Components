import { Component } from '@angular/core';

@Component({
	selector: 'app-warning',
	template: `
		<div>
			This is a warning component!

			<div class="app-success"></div>
		</div>
	`,
	styles: [`
		div {
			width: fit-content;
			padding: 15px 20px;
			margin: 10px 5px;
			border-radius: 5px;
			background-color: #ffd8515c;
			color: #8c9e00;
		}
	`]
})

export class WarningComponent {}