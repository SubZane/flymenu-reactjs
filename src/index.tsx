import React from 'react'
import ReactDOM from 'react-dom'
import OffCanvasPanel from './offcanvas-panel/App'
import Slidemenu from './slidemenu/App'
import menudataJSON from './menudata.json'
import { ThemeProvider, theme } from './helpers/theme'

ReactDOM.render(
	<React.Fragment>
		<ThemeProvider theme={theme}>
			<OffCanvasPanel state={''} showButton={true} animation={'door-left'}>
				<Slidemenu menuDataSource={menudataJSON.treemenu} backButtonText={'Go back'} />
			</OffCanvasPanel>
		</ThemeProvider>
	</React.Fragment>,
	document.getElementById('root')
)
