import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { post } from '../../utilsapi';
import { useEffect } from 'react';
import { getTags } from '../../redux/actions/tags';
import { editUserField } from '../../redux/actions/auth';
import Tags from './Tags';

const TagInput = ({
	loading,
	tags,
	inputValue,
	handleInputChange,
	handleTagField,
	addedTags,
	getTags,
}) => {
	const tagMap = {};
	addedTags.length &&
		addedTags.forEach((tag) => {
			tagMap[tag._id] = true;
		});

	const createNewTag = async (value) => {
		try {
			const authRequired = true;
			const res = await post(
				'/api/data/tag/create-tag',
				{ value },
				authRequired
			);
			handleTagField(res.data.tag, 'add');
		} catch (err) {
			console.log(err.message);
		}
	};
	const handleTagResults = () => {
		if (loading) {
			return <Spinner />;
		} else if (tags.length) {
			return tags.map((tag, index) => {
				if (tagMap[tag._id]) return null;
				else {
					return (
						<div className='result' onClick={() => handleTagField(tag, 'add')}>
							{tag.handle}
						</div>
					);
				}
			});
		} else {
			return null;
		}
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (inputValue) {
			const foundTag = tags.find((tag) => tag.handle === inputValue);
			if (foundTag) handleTagField(foundTag, 'add');
			else createNewTag(inputValue);
		}
	};

	useEffect(() => {
		let timer = setTimeout(() => {
			if (inputValue) {
				getTags(inputValue);
			}
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [inputValue]);

	return (
		<>
			<button className='add-tag' onClick={handleClick}>
				+
			</button>
			<FormGroup
				inputValue={inputValue}
				inputName='tagInput'
				classNames={'tag-search'}
				inputType='text'
				label='Tags'
				handleInputChange={handleInputChange}
				handleAutoFill={handleTagResults}
			/>
			<Tags addedTags={addedTags} />
		</>
	);
};

TagInput.propTypes = {};

const mapStateToProps = (state) => ({
	tags: state.tags.tags,
});

export default connect(mapStateToProps, { getTags })(TagInput);
