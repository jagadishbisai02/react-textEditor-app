import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  EditorOuterContainer,
  EditorInnerContainer,
  EditorContentContainer,
  EditorHeading,
  EditorImage,
  EditorContainer,
  EditorBtnContainer,
  Button,
  BtnList,
  HorizontalLine,
  ContentArea,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underlineActive: false,
  }

  onClickBold = () => {
    this.setState(prev => ({
      boldActive: !prev.boldActive,
    }))
  }

  onClickItalic = () => {
    this.setState(prev => ({
      italicActive: !prev.italicActive,
    }))
  }

  onClickUnderline = () => {
    this.setState(prev => ({
      underlineActive: !prev.underlineActive,
    }))
  }

  render() {
    const {boldActive, italicActive, underlineActive} = this.state
    const boldColor = boldActive ? '#faff00' : '#f1f5f9'
    const italicColor = italicActive ? '#faff00' : '#f1f5f9'
    const underlineColor = underlineActive ? '#faff00' : '#f1f5f9'
    const boldStyle = boldActive ? 'bold' : 'normal'
    const italicStyle = italicActive ? 'italic' : 'normal'
    const underlineStyle = underlineActive ? 'underline' : 'normal'

    return (
      <EditorOuterContainer>
        <EditorInnerContainer>
          <EditorContentContainer>
            <EditorHeading>Text Editor</EditorHeading>
            <EditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </EditorContentContainer>
          <EditorContainer>
            <EditorBtnContainer>
              <BtnList>
                <Button
                  type="button"
                  data-testid="bold"
                  btnColor={boldColor}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </BtnList>
              <BtnList>
                <Button
                  type="button"
                  data-testid="italic"
                  btnColor={italicColor}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </BtnList>
              <BtnList>
                <Button
                  type="button"
                  data-testid="underline"
                  btnColor={underlineColor}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </BtnList>
            </EditorBtnContainer>
            <HorizontalLine />
            <ContentArea
              boldStyle={boldStyle}
              italicStyle={italicStyle}
              underlineStyle={underlineStyle}
            />
          </EditorContainer>
        </EditorInnerContainer>
      </EditorOuterContainer>
    )
  }
}

export default TextEditor
