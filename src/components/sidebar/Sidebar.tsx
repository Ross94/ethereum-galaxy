import * as React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { MdMenu, MdInfoOutline } from 'react-icons/lib/md'

import SidebarItem from './SidebarItem'
import Button from '../Button'

const sidebarWidth = 300

const sidebarOpenAnimation = {
    '0%': {
        left: -sidebarWidth
    },
    '100%': {
        left: 0
    }
}
const sidebarCloseAnimation = {
    '0%': {
        left: 0
    },
    '100%': {
        left: -sidebarWidth
    }
}

const openBackdrop = {
    '0%': {
        backgroundColor: 'rgba(100, 100, 100, 0)'
    },
    '100%': {
        backgroundColor: 'rgba(100, 100, 100, .4)'
    }
}

const styles = StyleSheet.create({
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(100, 100, 100, .4)',
        zIndex: -20,
        animationName: [openBackdrop],
        animationDuration: '.5s'
    },
    nobackdrop: {
        width: 0,
        height: 0
    },
    sidebarContainer: {
        position: 'absolute',
        top: 0,
        left: -sidebarWidth,
        height: '100%',
        width: 300,
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, .4)',
        zIndex: 100,
        fontFamily: 'sans-serif',
        animationName: [sidebarCloseAnimation],
        animationDuration: '.5s'
    },
    closed: {
        left: -sidebarWidth
    },
    opened: {
        left: 0,
        animationName: [sidebarOpenAnimation],
        animationDuration: '.5s'
    },
    sidebarHeader: {
        height: 64,
        padding: '0px 8px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgb(60, 113, 187)',
        boxShadow:
            'inset 1px 1px 0 rgba(0,0,0, .1), inset 0 -1px 0 rgba(0,0,0, .07)',
        color: 'white'
    },
    sidebarTitle: {
        width: '100%',
        fontSize: 24,
        textAlign: 'center'
    }
})

interface SidebarProps {
    isOpen: boolean
    graphs: string[]
    selectedGraph: string
    selectGraph: (graphId: string) => void
    closeSidebar: (e: any) => void
}

class Sidebar extends React.Component<SidebarProps> {
    render() {
        const {
            selectGraph,
            graphs,
            selectedGraph,
            closeSidebar,
            isOpen
        } = this.props

        return (
            <div
                className={css(
                    styles.sidebarContainer,
                    isOpen ? styles.opened : styles.closed
                )}
            >
                <div
                    className={css(
                        isOpen ? styles.backdrop : styles.nobackdrop
                    )}
                    onClick={closeSidebar}
                />
                <div className={css(styles.sidebarHeader)}>
                    <Button icon={<MdMenu />} onClick={closeSidebar} />
                    <div className={css(styles.sidebarTitle)}>
                        Eth Net Viewer
                    </div>
                    <Button
                        icon={<MdInfoOutline />}
                        onClick={(e: any) => console.log('TODO gotohome')}
                    />
                </div>
                {graphs.map((g: string) => (
                    <SidebarItem
                        key={g}
                        graphId={g}
                        onClick={selectGraph}
                        isSelected={g === selectedGraph}
                    />
                ))}
            </div>
        )
    }
}

export default Sidebar