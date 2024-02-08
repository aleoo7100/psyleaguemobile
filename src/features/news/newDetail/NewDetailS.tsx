import React from 'react';
import styled from 'styled-components/native';
import { Layout1 } from '../../../common/components/Layout';
import { NewsStackParamList } from '../../../navigation/NewsNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import WebView from 'react-native-webview';
import useNewDetailS from './useNewDetailS';
import { Linking, Platform } from 'react-native';
import { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

type ScreenProps = NativeStackScreenProps<NewsStackParamList, 'newDetail'>;

export default function NewDetailS(props: ScreenProps) {
  const { data, loading } = useNewDetailS({
    news_id: props.route.params.news_id,
  });
  const webViewRef = React.useRef<WebView>(null);

  const onShouldStartLoadWithRequest = (request: ShouldStartLoadRequest) => {
    const isExternalLink =
      Platform.OS === 'ios' ? request.navigationType === 'click' : true;
    if (
      request.mainDocumentURL?.startsWith('about:blank') &&
      (request.url.startsWith('about:blank') || !isExternalLink)
    ) {
      return true;
    }
    Linking.openURL(request.url).catch(err =>
      console.error('An error occurred', err),
    );
    return false;
  };

  return (
    <Layout1 loading={loading}>
      <HeaderImage
        source={{ uri: data?.thumbnail_url }}
        defaultSource={require('../../../assets/images/defaultBackground.png')}
      />
      <WebViewContainer>
        <WebView
          ref={webViewRef}
          decelerationRate="normal"
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          sharedCookiesEnabled={true}
          mixedContentMode="always"
          source={{
            html: `${htmlTemplateInit}${cssStyles} ${data?.html_content}${htmlTemplateEnd}`,
          }}
          originWhitelist={['*']}
          style={{ flex: 1, backgroundColor: '#fff' }}
          onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        />
      </WebViewContainer>
    </Layout1>
  );
}

const HeaderImage = styled.Image`
  width: 100%;
  aspect-ratio: 2;
  border-radius: 26px;
  z-index: 2;
`;
const WebViewContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: #fff;
  top: -26px;
  padding-top: 28px;
  z-index: 1;
`;

const cssStyles = `
<style>
  *{
    margin: 0;
    font-family: "Poppins";
    box-sizing: border-box;
  }
  body{
    width: 100%;
    padding: 24px;
    padding-bottom: 80px;
    font-size: 40px;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  p {
    font-size: 1rem;
  }
  li {
    font-size: 1rem;
  }
  strong {
    font-weight: 600;
  }
  .text-tiny {
    font-size: 0.7rem;
  }
  .text-small {
    font-size: 0.85rem;
  }
  .text-big {
    font-size: 1.4rem;
  }
  .text-huge {
    font-size: 1.8rem;
  }
  ul {
    padding-left: 0px;
    margin-left: 20px;
  }

  code {background-color: hsla(0, 0%, 78%, 0.3);border-radius: 2px;padding: 0.15rem;}
  blockquote {border-left: 5px solid #ccc;font-style: italic;margin-left: 0;margin-right: 0;overflow: hidden;padding-left: 1.5rem;padding-right: 1.5rem;}
  pre {background: hsla(0, 0%, 78%, 0.3);border: 1px solid #c4c4c4;border-radius: 2px;color: #353535;direction: ltr;font-style: normal;min-width: 200px;padding: 1rem;tab-size: 4;text-align: left;white-space: pre-wrap;}
  pre code {background: unset;border-radius: 0;padding: 0;}
  hr {background: #dedede;border: 0;height: 4px;margin: 15px 0;}
  .image {clear: both;display: table;margin: 0.9rem auto;min-width: 50px;text-align: center;}
  .image img {display: block;height: auto;margin: 0 auto;max-width: 100%;min-width: 100%;}
  .image-inline {align-items: flex-start;display: inline-flex;max-width: 100%;}
  .image-inline picture {display: flex;}
  .image-inline img,.image-inline picture {flex-grow: 1;flex-shrink: 1;max-width: 100%;}
  .image > figcaption {background-color: #f7f7f7;caption-side: bottom;color: #333;display: table-caption;font-size: 0.75rem;outline-offset: -1px;padding: 0.6rem;word-break: break-word;}
  img.image_resized {height: auto;}
  .image.image_resized {box-sizing: border-box;display: block;max-width: 100%;}
  .image.image_resized img {width: 100%;}
  .image.image_resized > figcaption {display: block;}
  .image-style-block-align-left,.image-style-block-align-right {max-width: calc(100% - 1.5rem);}
  .image-style-align-left,.image-style-align-right {clear: none;}
  .image-style-side {float: right;margin-left: 1.5rem;max-width: 50%;}
  .image-style-align-left {float: left;margin-right: 1.5rem;}
  .image-style-align-center {margin-left: auto;margin-right: auto;}
  .image-style-align-right {float: right;margin-left: 1.5rem;}
  .image-style-block-align-right {margin-left: auto;margin-right: 0;}
  .image-style-block-align-left {margin-left: 0;margin-right: auto;}
  p + .image-style-align-left,p + .image-style-align-right,p + .image-style-side {margin-top: 0;}
  .image-inline.image-style-align-left,.image-inline.image-style-align-right {margin-bottom: 0.75rem;margin-top: 0.75rem;}
  .image-inline.image-style-align-left {margin-right: 0.75rem;}
  .image-inline.image-style-align-right {margin-left: 0.75rem;}
  ol {list-style-type: decimal;}
  ol ol {list-style-type: lower-latin;}
  ol ol ol {list-style-type: lower-roman;}
  ol ol ol ol {list-style-type: upper-latin;}
  ol ol ol ol ol {list-style-type: upper-roman;}
  ul {list-style-type: disc;}
  ul ul {list-style-type: circle;}
  ul ul ul,ul ul ul ul {list-style-type: square;}
  .media {clear: both;display: block;margin: 0.9rem 0;min-width: 15rem;}
  .table {display: table;margin: 0.9rem auto;}
  .table table {border: 1px double #b3b3b3;border-collapse: collapse;border-spacing: 0;height: 100%;width: 100%;}
  .table table td,.table table th {border: 1px solid #bfbfbf;min-width: 2rem;padding: 0.4rem;}
  .table table th {background: rgba(0, 0, 0, 0.05);font-weight: 700;}
  .table > figcaption {background-color: #f7f7f7;caption-side: top;color: #333;display: table-caption;font-size: 0.75rem;outline-offset: -1px;padding: 0.6rem;text-align: center;word-break: break-word;}
  .table .ck-table-resized {table-layout: fixed;}.table table {overflow: hidden;}
  .table td,.table th {overflow-wrap: break-word;position: relative;}
</style>
`;
const htmlTemplateInit = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
  <title>Document</title>
</head>
<body>
  `;
const htmlTemplateEnd = `
</body>
</html>
`;
