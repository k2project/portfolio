import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Links() {
    const accordionData = {
        heading: 3,
        title: 'Links',
        subtitle: null,
        styling: 'bg-dark'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='accessibility links'
                >
                    <ChecklistLiEl id='links-1'>
                        Use <i>button</i> element for elements that perform a
                        within-page function and links <i>a</i> for elements
                        that load a new page.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-2'>
                        Use "skip navigation" link at the top of the page to
                        jump the user down to an anchor or target at the
                        beginning of the main content to allow user to skip the
                        navigation.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='#links-txt'>
                    Informative Link's Text
                </h4>
                <ul className='checklist__list' aria-labelledby='links-txt'>
                    <ChecklistLiEl id='links-txt-1'>
                        <strong className='color-themed--primary'>
                            Links should never be empty!
                        </strong>
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-txt-2'>
                        Link's text should be concise as possible without
                        sacrificing the meaning and must make sense when read
                        out of context.
                    </ChecklistLiEl>

                    <ChecklistLiEl id='links-txt-3'>
                        Place the distinguishing information of links at the
                        beginning of the link's text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-txt-4'>
                        Links and graphics used as links do not need to include
                        "link" in the link text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-txt-5'>
                        Avoid ambiguous phrases such as "click here", "more",
                        "click for details" in link's text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-txt-6'>
                        Use human-readable text instead of the URL.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-txt-7'>
                        Alert users when links lead to non-HTML resources, such
                        as PDF files, Word files, PowerPoint files, eg.
                        "Application Form (PDF)"
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-txt-8'>
                        Images in the link without a text MUST have alternative
                        text (alt="").{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-txt-9'>
                        Avoid creating links that go nowhere (href="#"), such as
                        dropdown menu on mouse action.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='#links-style'>
                    LINKS APPEARANCE
                </h4>
                <ul className='checklist__list' aria-labelledby='links-style'>
                    <ChecklistLiEl id='links-style-1'>
                        Links should look like links, and nothing else should.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-style-2'>
                        Ensure links are underlined. Otherwise provide high
                        contrast (3:1 contrast ratio) between link and
                        non-linked text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-style-3'>
                        Ensure the same visual presentation of link for both
                        keyboard and mouse user. Always use a:hover and a:focus
                        styling.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='#links-kbd'>
                    Keyborad Accessable
                </h4>
                <ul className='checklist__list' aria-labelledby='links-kbd'>
                    <ChecklistLiEl id='links-kbd-1'>
                        Avoid using JavaScript event handlers that do not permit
                        keyboard access.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-kbd-2'>
                        The <kbd>TAB</kbd> key allows users to jump from link to
                        link, and the <kbd>ENETR</kbd> key allows users to
                        select a link.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-kbd-3'>
                        Avoid setting link's <i>tabindex</i> attribute to "-1"
                        as can't be reached by the keyboard.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='#links-attr'>
                    Link's Attributes
                </h4>
                <ul className='checklist__list' aria-labelledby='links-attr'>
                    <ChecklistLiEl id='links-attr-1'>
                        Use <i>hreflang=""</i> to specify the language of the
                        linked resource.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-attr-2'>
                        Use <i>download</i> attribute for downloading the linked
                        resource.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-attr-3'>
                        Define the title of a link (which appears to the user as
                        a tooltip) with <i>title=""</i> attribute when the
                        link's text inforamtion is not sufficient.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-attr-4'>
                        Use <i>target=""</i> attribute to specify the context in
                        which the linked resource will open.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-attr-5'>
                        When using <i>target="_blank"</i> attribute inform user
                        that the link will open in a new tab/window: "Products
                        (opens in a new window)".
                    </ChecklistLiEl>
                    <ChecklistLiEl id='links-attr-6'>
                        Define an explicit tab order of links with{' '}
                        <i>tabindex="[-1,0,...]"</i> attribute.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Links;
