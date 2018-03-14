import * as React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { MdFileDownload, MdChevronRight } from 'react-icons/lib/md'

import Button from '../Button'

const styles = StyleSheet.create({
    sidebarItemContainer: {
        height: 44,
        width: '100%',
        display: 'flex',
        fontFamily: 'sans-serif',
        color: '#fff',
        userSelect: 'none',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(200, 200, 200, .6)'
        },
        ':active': {
            backgroundColor: 'rgba(200, 200, 0, .6)'
        }
    },
    selected: {
        backgroundColor: 'rgba(200, 200, 0, .6)'
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 8px'
    },
    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    download: {
        width: 44,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24
    },
    name: {
        width: '100%',
        textAlign: 'center'
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30
    }
})

interface SidebarItemProps {
    graphId: string
    onClick: (graphId: string) => void
    isSelected: boolean
}

class SidebarItem extends React.Component<SidebarItemProps> {
    render() {
        const { graphId, onClick, isSelected } = this.props
        return (
            <div
                className={css(
                    styles.sidebarItemContainer,
                    isSelected && styles.selected
                )}
            >
                <div className={css(styles.innerContainer)}>
                    <div
                        className={css(styles.download)}
                        onClick={() => console.log('TODO download')}
                    >
                        <MdFileDownload />
                    </div>
                    <div
                        className={css(styles.content)}
                        onClick={() => onClick(graphId)}
                    >
                        <div className={css(styles.name)}>{graphId}</div>
                        <div className={css(styles.icon)}>
                            <MdChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SidebarItem
