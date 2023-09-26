import React, { useContext } from 'react'
import ProfileAndCoverPicture from '../shared/Profile/ProfileAndCoverPicture'
import { LanguageContext } from '../../providers/Language';
import ConstantValues from '../../providers/Constants';
import ProfileIntro from '../shared/Profile/ProfileIntro';

const PageView = () => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<ProfileAndCoverPicture
				profilePicture={ConstantValues.profilePicture}
				coverPicture={ConstantValues.coverPicture}
				name={language.personName.firstMiddleILast}
			/>
			<ProfileIntro
				main={language.details.header}
				secondary={language.details.subHeader}
				location={language.details.location}
			/>
		</>
	)
}

export default PageView