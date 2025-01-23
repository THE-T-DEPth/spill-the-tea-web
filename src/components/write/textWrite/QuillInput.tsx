import ReactQuill from 'react-quill';
import * as S from '../../../styles/Write/QuillInputComponentStyle';
import Bold from '../../../assets/images/Bold.svg';
import Italic from '../../../assets/images/Italic.svg';
import Underline from '../../../assets/images/Underline.svg';
import React, { useRef } from 'react';

interface QuillProps {
  handleInput: (content: string) => void;
  textInput: any;
}

const QuillInput: React.FC<QuillProps> = ({ handleInput, textInput }) => {
  const quillRef = useRef<ReactQuill | null>(null); // ReactQuill 인스턴스 참조

  // useEffect(() => {
  //   if (quillRef.current) {
  //     console.log('Quill instance is ready:', quillRef.current);
  //     console.log(quillRef);
  //   }
  // }, []);

  const Quill = ReactQuill.Quill;

  const size = Quill.import('attributors/style/size');
  size.whitelist = ['15px', '28px', '38px'];
  Quill.register(size, true);

  const font = Quill.import('attributors/class/font');
  font.whitelist = [
    'nanumgothic',
    'nanummyeongjo',
    'dohyeon',
    'nanumpenscript',
  ];
  Quill.register(font, true);

  const icons = Quill.import('ui/icons');
  icons['bold'] = <span>{Bold}</span>;
  icons['italic'] = <span>{Italic}</span>;
  icons['underline'] = <span>{Underline}</span>;

  const ColorClass = Quill.import('attributors/class/color');
  Quill.register(ColorClass, true);
  const ColorStyle = Quill.import('attributors/style/color');
  Quill.register(ColorStyle, true);

  const COLORS = [
    '#000000',
    '#444444',
    '#717171',
    '#959595',
    '#BFBFBF',
    '#ffffff',
    '#e60000',
    '#ff9900',
    '#ffff00',
    '#008a00',
    '#0066cc',
    '#6b24b2',
  ];

  const modules = {
    toolbar: {
      container: [
        [{ font: font.whitelist }],
        [{ size: size.whitelist }],
        [
          'bold',
          'italic',
          'underline',
          'strike',
          {
            color: COLORS,
          },
        ],
      ],
    },
  };

  return (
    <>
      <S.StyledQuill
        ref={quillRef}
        style={{ width: '100%', height: '100%' }}
        modules={modules}
        placeholder='내용을 입력해주세요'
        onChange={(content) => handleInput(content)}
        value={textInput || ''}
      />
    </>
  );
};

export default QuillInput;
